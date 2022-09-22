import styled from "styled-components";

const Wrapper = styled.div`
    background: white;
    color: #111;
    font-size: 25px;
    font-weight: 600;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Header = () => {
    return <Wrapper>Paletto</Wrapper>;
};

export default Header;
