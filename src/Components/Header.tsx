import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 25px;
    font-weight: 600;
    background: whitesmoke;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 50px;
    min-width: 480px;
`;

const Header = () => {
    return <Wrapper>Paletto</Wrapper>;
};

export default Header;
