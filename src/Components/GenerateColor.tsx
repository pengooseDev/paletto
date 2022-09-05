import styled from "styled-components";
import { useRecoilState } from "recoil";
import { paletteAtom, generateColorAtom, TColor } from "../atoms";
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

    const brightness = () => {
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
