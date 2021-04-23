import styled from "styled-components";
import './App.css'

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: black;
  display: grid;
  grid-template-areas: 
  'TopNav TopNav TopNav'
  'Search Search Search'
  'Nav Nav Nav'
  'Main Main Main'
  'Foot Foot Foot';
`;

const TopNav = styled.nav`
  background: pink;
  grid-area: TopNap;
`;

const Search = styled.nav`
  background: yellow;
  grid-area: Search;
`;

const Nav = styled.nav`
  background: red;
  grid-area: Nav;
`;

const Main = styled.nav`
  background: violet;
  grid-area: Main;
`;

const Foot = styled.nav`
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
