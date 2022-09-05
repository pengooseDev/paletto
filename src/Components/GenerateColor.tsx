import styled from "styled-components";
import { useRecoilState } from "recoil";
import { colorAtom, TColor } from "../atoms";

type Color = [number,number,number]

const ColorBox = styled.div<{ bgColor: Color }>`
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
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    :hover {
        cursor: pointer;
        background: white;
        color: black;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

const GenerateColorBox = () => {
    const [color, setColor] = useRecoilState(colorAtom);
    const randomPicker = () => {
        setColor((prev) => {
            const prevColor = [...prev];
            const randomColor = () => {
                return Math.floor(Math.random() * 255);
            };
            console.log([randomColor(), randomColor(), randomColor()]);
            const newColor: TColor = [
                randomColor(),
                randomColor(),
                randomColor(),
            ];
            return newColor;
        });
    };

    return (
        <>
            <ColorBox bgColor={color}></ColorBox>
            <Button onClick={randomPicker}>Click</Button>
        </>
    );
};

export default GenerateColorBox;