import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    width: 300px;
    height: 100%;
    border: 1px solid black;
    border-bottom: none;
`;

const SideBar = () => {
    return (
        <Wrapper/>
    )
}

export default SideBar;