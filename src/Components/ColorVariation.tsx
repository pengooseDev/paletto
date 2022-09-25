import { HSVAtom } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import tinycolor from "tinycolor2";

const VariationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 100%;
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
    transition: 0.15s ease-in-out;
    color: white;
    font-weight: 600;
    transition: 0.15s ease-in-out;
    :hover {
        ::after {
            content: "Add!";
        }
        cursor: pointer;
        color: white;
    }
`;

const colorToHex = (color: ITinyRGB) => {
    return tinycolor(color).toHexString().toUpperCase();
};

const ColorVariation = () => {
    const [color, setColor] = useRecoilState(HSVAtom);

    /* Saturation & Value */
    const brightColor1: ITinyRGB = tinycolor(color).brighten(30).toRgb();
    const defaultColor: ITinyRGB = tinycolor(color).toRgb();
    const darkColor1: ITinyRGB = tinycolor(color).darken(15).toRgb();
    const darkColor2: ITinyRGB = tinycolor(color).darken(20).toRgb();
    const deSat1: ITinyRGB = tinycolor(color).desaturate(50).toRgb();
    const deSat2: ITinyRGB = tinycolor(color).desaturate(30).toRgb();

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
    const tinyHue1 = tinycolor(newHue1).darken(15).toRgb();
    const tinyHue2 = tinycolor(newHue2).darken(30).toRgb();
    const tinyHue3 = tinycolor(newHue3).darken(35).toRgb();
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
    return (
        <VariationContainer>
            {colorData.map((i) => (
                <Variation tinyColor={i}>{colorToHex(i)}</Variation>
            ))}
        </VariationContainer>
    );
};

export default ColorVariation;
