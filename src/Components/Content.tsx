import styled from "styled-components";
import { colorPickAtom, IColorPick } from "../atoms";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
`;

const ColorInput = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
`;

const ColorLabel = styled.label`
    background: ${(props) => props.colorPick};
`;

const inputColorChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
};

const ColorVariationContainer = styled.div`
    background: rgba(0, 0, 0, 0.3);
    padding: 10px;
`;

const Content = () => {
    // 현재는 String 그 자체 사용중. 이후, HexCode로 넘어올 것임. 오류 미리 생각.
    const [colorPick, setColorPick] = useRecoilState<IColorPick>(colorPickAtom);

    return (
        <Wrapper>
            <div>
                <ColorLabel
                    htmlFor="colorPicker"
                    colorPick={colorPick ? colorPick : "black"}
                >
                    123
                </ColorLabel>
                <input
                    type="color"
                    id="colorPicker"
                    onChange={inputColorChangeHandler}
                />
            </div>
            <ColorVariationContainer />
        </Wrapper>
    );
};

export default Content;
