import { useRecoilState } from "recoil";
import styled from "styled-components";
import { HSVAtom } from "../atoms";
import tinyColor from "tinycolor2";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 300px;
    height: 300px;
    background: rgba(0, 0, 0, 0.1);
`;

interface IRGB {
    r: number;
    g: number;
    b: number;
    a: number;
}

const ColorDisplay = styled.div<{ pickedColor: IRGB }>`
    border-radius: 5px;
    background: rgb(
        ${(props) => props.pickedColor.r},
        ${(props) => props.pickedColor.g},
        ${(props) => props.pickedColor.b}
    );

    width: 200px;
    height: 200px;
`;

/* HSVHandler */
const ColorHandler = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.1);
`;

/* ColorName */
const ColorName = styled.div`
    padding: 5px;
`;

const HueDisplay = styled.div`
    background: linear-gradient(
        90deg,
        #ff0000,
        #ffff00,
        #00ff00,
        #00ffff,
        #0000ff,
        #ff00ff,
        #ff0000
    );
    height: 15px;
    width: 90%;
    margin-left: 6px;
`;

const SaturationDisplay = styled.div<{ pickedColor: IRGB }>`
    background: linear-gradient(
        90deg,
        #ffffff,
        rgb(
            ${(props) => props.pickedColor.r},
            ${(props) => props.pickedColor.g},
            ${(props) => props.pickedColor.b}
        )
    );
    height: 15px;
    width: 90%;
    margin-left: 6px;
`;

const ValueDisplay = styled.div<{ pickedColor: IRGB }>`
    background: linear-gradient(
        90deg,
        #000000,
        rgb(
            ${(props) => props.pickedColor.r},
            ${(props) => props.pickedColor.g},
            ${(props) => props.pickedColor.b}
        )
    );
    height: 15px;
    width: 90%;
    margin-left: 6px;
`;

const ColorPicker = () => {
    const [color, setColor] = useRecoilState(HSVAtom);

    console.log("color", color);
    const valueHandler = (e: React.FormEvent<HTMLInputElement>, k: string) => {
        const value = Number(e.currentTarget.value);
        setColor((prev) => {
            return {
                ...prev,
                [k]: value,
            };
        });
    };

    const tinyHSV = tinyColor(color);
    const tinyRGB: IRGB = tinyHSV.toRgb();
    console.log("!!!", color.h);
    const tinySaturation = tinyColor({
        h: color.h,
        s: 100,
        v: color.v,
    }).toRgb();
    const tinyValue = tinyColor({ h: color.h, s: color.s, v: 100 }).toRgb();

    return (
        <Wrapper>
            <ColorDisplay
                pickedColor={tinyRGB ? tinyRGB : { r: 0, g: 0, b: 0, a: 0 }}
            ></ColorDisplay>
            <ColorName>#{tinyColor(color).toHex().toUpperCase()}</ColorName>
            <ColorHandler>
                {Object.entries(color).map(([k, v], i) => (
                    <div key={k}>
                        <div>
                            {k}:{v}
                        </div>
                        {i == 0 ? (
                            <HueDisplay />
                        ) : i == 1 ? (
                            <SaturationDisplay pickedColor={tinySaturation} />
                        ) : (
                            <ValueDisplay pickedColor={tinyValue} />
                        )}
                        <input
                            step="2"
                            onChange={(e) => {
                                valueHandler(e, k);
                            }}
                            value={v}
                            type="range"
                            max={i == 0 ? 360 : i == 1 ? 100 : 100}
                            key={i}
                        />
                    </div>
                ))}
            </ColorHandler>
        </Wrapper>
    );
};

export default ColorPicker;

/*
1. 테마 컬러 정할 수 있는 HSV Color picker 만들기
2. 컨트롤러 만들기



*/
