import ContentListItem from "./content-list-item";

import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-left: 30px;
`;

const ContentList = ({data}) => {

    const elements = data.map(item => {
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

export default ContentList;