import Header from "./Components/Header";
import GenerateColorBox from "./Components/GenerateColor";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <>
            <Wrapper>
                <Header />
                <GenerateColorBox />
            </Wrapper>
        </>
    );
}

export default App;
