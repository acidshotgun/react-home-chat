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
    background: #536976;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #292E49, #536976);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #292E49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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