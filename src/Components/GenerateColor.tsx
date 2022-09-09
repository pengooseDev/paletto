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
    //색채학 [색채학 + tinyColor](https://dane-itview.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%83%89%EC%83%81%EA%B0%92-%EB%AA%85%EB%8F%84-%EC%B1%84%EB%8F%84-%EB%B3%80%EA%B2%BD-%ED%95%98%EA%B8%B0-how-to-change-colors-bright-with-javascript?category=886653)

    const colorfulness = () => {
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

    //https://gammabeta.tistory.com/390 (HSV로 구조 바꿔서 만들어 보기.)

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
