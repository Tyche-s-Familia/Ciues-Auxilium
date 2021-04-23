import styled from "styled-components";
import './App.css'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: grid;
  text-align: center;
  grid-template-rows: 6vh 6vh 6vh 76vh 6vh;
  grid-template-areas: 'TopNav TopNav TopNav'
  'Search Search Search'
  'Nav Nav Nav'
  'Main Main Main'
  'Foot Foot Foot';
`;

const TopNav = styled.nav`
  background: pink;
  grid-area: TopNav;
`;

const Search = styled.nav`
  background: yellow;
  grid-area: Search;
`;

const Nav = styled.nav`
  background: red;
  grid-area: Nav;
`;

const Main = styled.section`
  background: violet;
  grid-area: Main;
`;

const Foot = styled.footer`
  background: yellow;
  grid-area: Foot;
`;

export default function App() {
  return (
    <Wrapper>
      <TopNav>Top Nav</TopNav>
      <Search>Search</Search>
      <Nav>Nav</Nav>
      <Main>Main</Main>
      <Foot>Footer</Foot>
    </Wrapper>
  )
}
