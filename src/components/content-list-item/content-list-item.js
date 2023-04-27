import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid black;
    width: 1300px;
    height: 350px;
    div {
        height: 200px;
    }
`;

const AvatarBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContentBlockWrapper = styled.div`
    display: flex;
    padding-left: 15px;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ContentBlockMessage = styled.div`
    height: 100%;
`;

const ContentListItem = (props) => {

    const { user, photo, theme, message} = props;

    return (
        <Wrapper>
            <div>
                <AvatarBlock>
                    <img src={photo} alt="ava"></img>
                </AvatarBlock>
                <h3>{user}</h3>
            </div>

            <ContentBlockWrapper>
                <h3>{theme}</h3>
                <ContentBlockMessage>{message}</ContentBlockMessage>
            </ContentBlockWrapper>
        </Wrapper>
    )
}

export default ContentListItem;