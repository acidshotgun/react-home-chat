import { Component } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    width: 500px;
    height: 300px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #8BC6EC;
    background: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%), rgba(5,5,5,0.01) 100%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        margin-bottom: 10px;
        display: inline-block;
        width: 200px;
        height: 25px;
        text-align: start;
        border: none;
        border-radius: 10px;
        padding-left: 15px;
    }
    textarea {
        width: 400px;
        height: 150px;
        font-size: 20px;
        padding: 15px;
        border: none;
        border-radius: 10px;
    }
`;

const Button = styled.button`
    margin-top: 30px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s all;
    &:hover {
        transform: scale(110%);
    }
`;

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            theme: '',
            message: '',
        }
    }

    onValueChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitValues = (event) => {
        event.preventDefault();
        this.props.addTheme(this.state.user, this.state.theme, this.state.message)
        this.setState({
            user: '',
            theme: '',
            message: '',
        })
    }

    render() {

        const { user, theme, message } = this.state;

        return (
            <Wrapper>
                <Form onSubmit={this.submitValues}>
                    <input onChange={this.onValueChanges} value={user} name="user" required placeholder="Имя"></input>
                    <input onChange={this.onValueChanges} value={theme} name="theme" required placeholder="Тема"></input>
                    <textarea onChange={this.onValueChanges} value={message} name="message" required placeholder="Сообщение"></textarea>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        )
    }
    
}

export default AddPost;