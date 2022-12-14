import { useRecoilState } from "recoil";
import styled from "styled-components";
import { HSVAtom } from "../atoms";
import tinyColor from "tinycolor2";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    width: 250px;
    background: rgba(0, 0, 0, 0.1);
`;

const EntriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
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
    width: 100%;
    height: 150px;
`;

/* HSVHandler */
const ColorHandler = styled.div`
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.1);
`;

/* ColorName */
const ColorName = styled.div`
    margin: 10px 0px;
    font-weight: 600;
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
    width: 97%;
    margin-left: 3px;
`;

const SaturationDisplay = styled.div<{
    tinySaturation: IRGB;
    tinySaturationOrigin: IRGB;
}>`
    background: linear-gradient(
        90deg,
        rgb(
            ${(props) => props.tinySaturationOrigin.r},
            ${(props) => props.tinySaturationOrigin.g},
            ${(props) => props.tinySaturationOrigin.b}
        ),
        rgb(
            ${(props) => props.tinySaturation.r},
            ${(props) => props.tinySaturation.g},
            ${(props) => props.tinySaturation.b}
        )
    );
    height: 15px;
    width: 97%;
    margin-left: 3px;
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
    width: 97%;
    margin-left: 3px;
`;

const HSVValue = styled.div`
    padding: 5px 8px;
    background: whitesmoke;
    border-radius: 5px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const ValueInput = styled.input`
    margin-top: 3px;
`;

const ColorPicker = () => {
    const [color, setColor] = useRecoilState(HSVAtom);

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
    const tinySaturation = tinyColor({
        h: color.h,
        s: 100,
        v: color.v,
    }).toRgb();
    const tinySaturationOrigin = tinyColor({
        h: color.h,
        s: 0,
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
                    <EntriesWrapper key={k}>
                        <HSVValue>
                            {k}:{v}
                        </HSVValue>
                        {i === 0 ? (
                            <HueDisplay id="colorDisplay" />
                        ) : i === 1 ? (
                            <SaturationDisplay
                                tinySaturation={tinySaturation}
                                tinySaturationOrigin={tinySaturationOrigin}
                            />
                        ) : (
                            <ValueDisplay pickedColor={tinyValue} />
                        )}
                        <ValueInput
                            step="2"
                            onChange={(e) => {
                                valueHandler(e, k);
                            }}
                            value={v}
                            type="range"
                            max={i === 0 ? 360 : i === 1 ? 100 : 100}
                            key={i}
                        />
                    </EntriesWrapper>
                ))}
            </ColorHandler>
        </Wrapper>
    );
};

export default ColorPicker;
