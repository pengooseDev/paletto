import { HSVAtom, palettoAtom } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import tinycolor from "tinycolor2";

const VariationContainer = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
`;

interface ITinyRGB {
    r: number;
    g: number;
    b: number;
    a: number;
}

const Variation = styled.div<{ tinyColor: ITinyRGB }>`
    background: rgb(
        ${(props) => props.tinyColor.r},
        ${(props) => props.tinyColor.g},
        ${(props) => props.tinyColor.b}
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    transition: 0.1s ease-in-out;
    border-radius: 30px;

    :hover {
        position: relative;
        z-index: 1;
        cursor: pointer;
        color: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }
`;

const colorToHex = (color: ITinyRGB) => {
    return tinycolor(color).toHexString().toUpperCase();
};

const ColorVariation = () => {
    const [color, setColor] = useRecoilState(HSVAtom);
    const [paletto, setPaletto] = useRecoilState(palettoAtom);

    /* Saturation & Value */
    const brightColor1: ITinyRGB = tinycolor(color).brighten(30).toRgb();
    const defaultColor: ITinyRGB = tinycolor(color).toRgb();
    const darkColor1: ITinyRGB = tinycolor(color).darken(15).toRgb();
    const darkColor2: ITinyRGB = tinycolor(color).darken(20).toRgb();
    const deSat1: ITinyRGB = tinycolor(color).desaturate(50).toRgb();
    const deSat2: ITinyRGB = tinycolor(color).saturate(30).toRgb();

    /* Hue */
    const hueValue = color.h;
    const saturationValue = color.s;
    const newHue1 = {
        ...color,
        ["h"]: (hueValue + 80) % 360,
        ["s"]: saturationValue + 10,
    };

    const newHue2 = {
        ...color,
        ["h"]: (hueValue + 100) % 360,
        ["s"]: saturationValue - 10,
    };

    const newHue3 = {
        ...color,
        ["h"]: (hueValue + 120) % 360,
        ["s"]: saturationValue - 30,
    };

    const newHue4 = { ...color, ["h"]: (hueValue + 242) % 360 };
    const newHue5 = { ...color, ["h"]: (hueValue + 222) % 360 };
    const newHue6 = { ...color, ["h"]: (hueValue + 262) % 360 };
    const tinyHue1 = tinycolor(newHue1).saturate(30).darken(15).toRgb();
    const tinyHue2 = tinycolor(newHue2).saturate(10).darken(30).toRgb();
    const tinyHue3 = tinycolor(newHue3).saturate(10).darken(35).toRgb();
    const tinyHue4 = tinycolor(newHue4).desaturate(30).toRgb();
    const tinyHue5 = tinycolor(newHue5).desaturate(20).darken(10).toRgb();
    const tinyHue6 = tinycolor(newHue6).toRgb();

    //    const newHue: ITinyRGB = color;

    const colorData = [
        brightColor1,
        defaultColor,
        darkColor1,
        darkColor2,
        deSat2,
        deSat1,
        tinyHue1,
        tinyHue2,
        tinyHue3,
        tinyHue4,
        tinyHue5,
        tinyHue6,
    ];

    const copyFunc = (e: React.MouseEvent<HTMLElement>) => {
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = e.currentTarget.innerHTML;
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
    };
    const addFunc = (e: React.MouseEvent) => {
        setPaletto((prev) => {
            if (prev.length >= 5) {
                return [...prev];
            }
            const newColor = e.currentTarget.innerHTML;
            return [...prev, newColor];
        });
    };

    return (
        <VariationContainer>
            {colorData.map((v, i) => (
                <Variation
                    tinyColor={v}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        copyFunc(e);
                        addFunc(e);
                    }}
                    key={i}
                >
                    {colorToHex(v)}
                </Variation>
            ))}
        </VariationContainer>
    );
};

export default ColorVariation;
