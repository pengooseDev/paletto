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
    color: transparent;
    font-weight: 600;
    :hover {
        cursor: pointer;
        color: white;
    }
`;

const colorToHex = (color: ITinyRGB) => {
    return tinycolor(color).toHexString().toUpperCase();
};

const ColorVariation = () => {
    const [color, setColor] = useRecoilState(HSVAtom);
    /* Dark */

    const brightColor1: ITinyRGB = tinycolor(color).brighten(30).toRgb();
    const defaultColor: ITinyRGB = tinycolor(color).toRgb();
    const darkColor1: ITinyRGB = tinycolor(color).darken(15).toRgb();
    const darkColor2: ITinyRGB = tinycolor(color).darken(30).toRgb();

    const deSat1: ITinyRGB = tinycolor(color).desaturate(50).toRgb();
    const deSat2: ITinyRGB = tinycolor(color).desaturate(30).toRgb();

    return (
        <VariationContainer>
            <Variation tinyColor={brightColor1}>
                {colorToHex(brightColor1)}
            </Variation>
            <Variation tinyColor={defaultColor}>
                {colorToHex(defaultColor)}
            </Variation>
            <Variation tinyColor={darkColor1}>
                {colorToHex(darkColor1)}
            </Variation>
            <Variation tinyColor={darkColor2}>
                {colorToHex(darkColor2)}
            </Variation>
            <Variation tinyColor={deSat2}>{colorToHex(deSat2)}</Variation>
            <Variation tinyColor={deSat1}>{colorToHex(deSat1)}</Variation>
        </VariationContainer>
    );
};

export default ColorVariation;
