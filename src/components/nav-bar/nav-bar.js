import styled from 'styled-components'

const NavBlock = styled.nav`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #404040;
`;

const NavItem = styled.div`
    display: block;
    margin-left: 10px;
    width: 100px;
    padding: 10px;
    font-size: 18px;
    text-align: center;
    color: #ffff;
    cursor: pointer;
`;

const NavBar = () => {
    return (
        <NavBlock>
            <NavItem>Главная</NavItem>
            <NavItem>Сообщество</NavItem>
            <NavItem>Новости</NavItem>
        </NavBlock>
    )
}

export default NavBar;