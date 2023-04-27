import NavBlock from '../nav-bar/nav-bar'
import Header from '../header/header';
import SideBar from '../side-bar/side-bar';
import ContentList from '../content-list/content-list';

import styled from 'styled-components';

const Wrapper = styled.div`
	background: #1F1C2C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #928DAB, #1F1C2C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #928DAB, #1F1C2C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const ContentWrapper = styled.div`
	display: flex;
	height: 1000px;
`;

function App() {
  return (
    <Wrapper>
      <NavBlock />
      <Header />
	  <ContentWrapper>
		<SideBar />
		<ContentList />
	  </ContentWrapper>
    </Wrapper>
  );
}

export default App;
