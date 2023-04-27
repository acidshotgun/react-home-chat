import { Component } from "react";
import nextId from "react-id-generator";
import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-left: 30px;
`;

class ContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {user: 'Alisa M', photo: '/img/wen.jpg', theme: 'Cat', message: 'Вау какие котята', id: nextId()}
            ]
        }
    }


    render() {
        return (
            <Wrapper>
    
            </Wrapper>
        )
    }
}

export default ContentList;