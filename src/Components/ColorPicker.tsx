import styled from "styled-components";

const ColorDisplay = styled.div<{ pickedColor: string }>`
    background: ${(props) => props.pickedColor};
`;

const ColorPicker = () => {
    return (
        <div>
            <ColorDisplay pickedColor={"teal"}></ColorDisplay>ColorPicker
        </div>
    );
};

export default ColorPicker;

/*
1. 테마 컬러 정할 수 있는 HSV Color picker 만들기
2. 컨트롤러 만들기



*/
