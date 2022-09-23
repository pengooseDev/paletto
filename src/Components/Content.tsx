import styled from "styled-components";
import { colorPickAtom, IColorPick } from "../atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";

/* Wrapper */
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
`;

/* Color */
const ColorInput = styled.input.attrs({ type: "color" })`
    display: none;
    position: fixed;
    top: 500px;
    left: 500px;
`;

//styledComponents의 props는 object로 전달하는게 default임. 따라서 object형식으로 넘겨줘야함.
const ColorLabel = styled.label<{ colorPick: IColorPick }>`
    background: ${(props) => props.colorPick || "black"};
    display: flex;
    height: 50%;
`;

const ColorVariationContainer = styled.div`
    background: rgba(0, 0, 0, 0.3);
    padding: 10px;
`;

//HSV { h: 360, s: 100, v: 100 }

const ColorLabelContainer = () => {
    const [colorPick, setColorPick] = useRecoilState<IColorPick>(colorPickAtom);

    const colorChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        const newColor = e.currentTarget.value;
        setColorPick((prev) => newColor);
    };

    return (
        <>
            <ColorLabel
                htmlFor="colorPicker"
                colorPick={colorPick ? colorPick : "black"}
            />
            <ColorInput id="colorPicker" onChange={colorChangeHandler} />
        </>
    );
};

const Content = () => {
    // 현재 HexCode:string으로 넘어옴.

    return (
        <Wrapper>
            {/* Left Component */}
            <ColorLabelContainer />

            {/* Right Component */}
            <ColorVariationContainer />
        </Wrapper>
    );
};

export default Content;
