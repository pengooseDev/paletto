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

const ColorPicker = () => {
    const [color, setColor] = useRecoilState(HSVAtom);

    console.log(color);
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
    console.log(tinyRGB);

    return (
        <Wrapper>
            <ColorDisplay
                pickedColor={tinyRGB ? tinyRGB : { r: 0, g: 0, b: 0, a: 0 }}
            ></ColorDisplay>
            <ColorHandler>
                {Object.entries(color).map(([k, v], i) => (
                    <div key={k}>
                        <div>
                            {k}:{v}
                        </div>
                        <input
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
