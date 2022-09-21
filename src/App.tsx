import Header from "./Components/Header";
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
            </Wrapper>
        </>
    );
}

export default App;
