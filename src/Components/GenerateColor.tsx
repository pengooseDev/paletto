import styled from "styled-components";
import { useRecoilState } from "recoil";
import { paletteAtom, generateColorAtom, TColor, THSV } from "../atoms";
import { generateColor } from "../handler/colorHandler";
import { useEffect } from "react";

const ColorBox = styled.div<{ bgColor: TColor }>`
    background: ${(props) => {
        return `rgb(${props.bgColor[0]}, ${props.bgColor[1]}, ${props.bgColor[2]})`;
    }};
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    transition: ease-in-out 0.2s;
`;

const Button = styled.div`
    left: 35%;
    width: 50px;
    height: 20px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 10px;
    background: whitesmoke;
    color: black;
    transition: 0.2s ease-in-out;
    :hover {
        cursor: pointer;
        background: white;
        color: black;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

const GenerateColorBox = () => {
    const [palette, setpalette] = useRecoilState(paletteAtom);
    const [color, setColor] = useRecoilState(generateColorAtom);

    const randomPicker = () => {
        setColor((prev) => {
            const newColor: TColor = generateColor();
            return newColor;
        });
    };

    const randomize = () => {
        setColor((prev) => {
            const prevColor = [...prev];
            const r = prevColor[0];
            const g = prevColor[1];
            const b = prevColor[2];

            const returnColor = [
                r * 1.2 >= 255 ? (r * 1.2) % 255 : r * 1.2,
                g * 1.5 >= 255 ? (g * 1.5) % 255 : g * 1.5,
                b * 1 >= 255 ? (b * 1) % 255 : b * 1,
            ] as TColor;
            return returnColor;
        });
    };

    // RGB -> HSV convert fomula : https://www.had2know.org/technology/hsv-rgb-conversion-formula-calculator.html
    // H(Hue; 색조), S(Saturation; 채도), V(Value; 명도)
    const HSV = (color: TColor): THSV => {
        if (!color[0] || !color[1] || !color[2]) return [0, 0, 0]; //undefined exception
        const r = color[0] / 255;
        const g = color[1] / 255;
        const b = color[2] / 255;

        // V(value) : 밝기.
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h,
            s,
            l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }

            h = h !== 0 && h !== undefined ? h / 6 : 0;
        }

        return [h, s, l];
    };

    const brightness = () => {};
    const colorfulness = () => {};

    useEffect(() => {
        randomPicker();
    }, []);

    return (
        <>
            <ColorBox bgColor={color}></ColorBox>
            <Button onClick={randomPicker}>Click</Button>
            <Button onClick={brightness}>Brightness</Button>
        </>
    );
};

export default GenerateColorBox;
