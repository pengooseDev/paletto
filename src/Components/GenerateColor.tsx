import styled from "styled-components";
import { useRecoilState } from "recoil";
import { paletteAtom, generateColorAtom, TColor, THSV } from "../atoms";
import { generateColor } from "../handler/colorHandler";
import { useEffect } from "react";
import { HSV } from "../handler/HSV";

const Wrapper = styled.div`
    display: flex;
`;

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
    text-align: center;
    border-radius: 5px;
    padding: 10px 0px;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    color: black;
    transition: 0.2s ease-in-out;
    :hover {
        cursor: pointer;
        background: white;
        color: black;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

const ColorDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: whitesmoke;
`;

const ColorData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    padding: 20px;
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
    // H(Hue; 색조), S(Saturation; 채도), V(Value; 명도)
    const hsvData = HSV(color);

    const brightness = () => {};
    const colorfulness = () => {};

    useEffect(() => {
        randomPicker();
    }, []);

    const changeHandler = () => {
        console.log(1);
    };
    
    return (
        <Wrapper>
            <div>
                <ColorBox bgColor={color}></ColorBox>
            </div>
            <ColorDataWrapper>
                <ColorData>
                    {Object.entries(hsvData).map((i, v) => (
                        <div>
                            <div>{i[0]}</div>
                            <div>{i[1]}</div>
                            <div>{v}</div>
                            <input
                                type="range"
                                max={
                                    v === 0
                                        ? 360
                                        : v === 1
                                        ? 100
                                        : v === 2
                                        ? 1
                                        : 1
                                }
                                value={i[1]}
                            ></input>
                        </div>
                    ))}
                </ColorData>
                {color.map((i) => (
                    <div>{i}</div>
                ))}
                <Button onClick={randomPicker}>Click</Button>
            </ColorDataWrapper>
        </Wrapper>
    );
};
// 0 : Red, 120 : Green, 240 : Blue

export default GenerateColorBox;

/*
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
 */
