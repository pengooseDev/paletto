import Header from "./Components/Header";
import styled from "styled-components";
import Content from "./Components/Content";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

function App() {
    return (
        <Wrapper>
            <Header />
            <Content />
        </Wrapper>
    );
}

export default App;
