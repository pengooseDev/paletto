import ColorPicker from "./ColorPicker";
import ColorVariation from "./ColorVariation";
import styled from "styled-components";
import MyPaletto from "./MyPaletto";

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 290px 1fr;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const Content = () => {
    return (
        <>
            <ContentWrapper>
                <ColorPicker />
                <MyPaletto />
            </ContentWrapper>
            <ColorVariation />
        </>
    );
};

export default Content;
