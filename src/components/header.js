import styled from "styled-components";

const HeaderItem = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    height: 330px;
    width: 100%;
    img {
        margin: 0 auto;
    }
    h1 {
        color: #fff;
    }
`;

const Header = () => {
    return (
        <HeaderItem>
            <img src="/img/kitty-smile.gif" alt="kitty"></img>
            <h1>Создать тему</h1>
        </HeaderItem>
    )
}

export default Header;