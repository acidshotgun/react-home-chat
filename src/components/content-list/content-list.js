import ContentListItem from "../content-list-item/content-list-item";

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
                {user: 'Alisa M', photo: '/img/wen.jpg', theme: 'Cat', message: 'Вау какие котята', id: nextId()},
                {user: 'Roma M', photo: '/img/wen.jpg', theme: 'Keys', message: 'Я нашел чьи то ключи свяжитесь со мной', id: nextId()},
            ]
        }
    }

    render() {

        const elements = this.state.data.map(item => {
            const { id, ...itemProps } = item;

            return (
                <ContentListItem 
                    key={id}
                    {...itemProps}
                />
            )
        });

        return (
            <Wrapper>
                {elements}
            </Wrapper>
        )
    }
}

export default ContentList;