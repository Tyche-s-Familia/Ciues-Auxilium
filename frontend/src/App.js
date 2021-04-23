import styled from "styled-components";
import './App.css'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: grid;
  grid-template-areas: 'TopNav TopNav TopNav'
  'Search Search Search'
  'Nav Nav Nav'
  'Main Main Main'
  'Foot Foot Foot';
`;

const TopNav = styled.div`
  background: pink;
  grid-area: TopNap;
`;

const Search = styled.div`
  background: yellow;
  grid-area: Search;
`;

const Nav = styled.div`
  background: red;
  grid-area: Nav;
`;

const Main = styled.div`
  background: violet;
  grid-area: Main;
`;

const Foot = styled.div`
  background: yellow;
  grid-area: Foot;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

export default function App() {
  return (
    <Wrapper>
      <TopNav>Top Nav</TopNav>
      <Search>Search</Search>
      <Nav>Nav</Nav>
      <Main><Title>Hello</Title></Main>
      <Foot>Footer</Foot>
    </Wrapper>
  )
}
