import { Component } from 'react';

import NavBlock from '../nav-bar'
import Header from '../header';
import SideBar from '../side-bar';
import ContentList from '../content-list';
import AddPost from '../add-post';

import styled from 'styled-components';
import nextId from "react-id-generator";

const Wrapper = styled.div`
background-image: linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% );
`;

const ContentWrapper = styled.div`
	display: flex;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
            data: [
                {user: 'Alisa M', photo: '/img/wen.jpg', theme: 'Cat', message: 'Вау какие котята', id: nextId()},
                {user: 'Roma M', photo: '/img/wen.jpg', theme: 'КЛЮЧИ НАШЕЛ!!!!', message: 'Я нашел чьи то ключи свяжитесь со мной', id: nextId()},
            ]
        }
	}
  
	addTheme = (newUser, newTheme, newMessage) => {
		this.setState(({data}) => {
			return {
				data: [...data, {user: newUser, photo: '/img/wen.jpg', theme: newTheme, message: newMessage, id: nextId()}]
			}
		})
	}

	render() {

		return (
			<Wrapper>
			  <NavBlock />
			  <Header />
			  <ContentWrapper>
				<SideBar />
				<ContentList data={this.state.data}/>
			  </ContentWrapper>
			  <AddPost addTheme={this.addTheme}/>
			</Wrapper>
		  );
	}
}

export default App;
