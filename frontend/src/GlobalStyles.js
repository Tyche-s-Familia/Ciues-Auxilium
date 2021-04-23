import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;

}
`;

export default GlobalStyles;

export const Wrapper = styled.section`
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

export const TopNav = styled.nav`
  background: pink;
  grid-area: TopNav;
`;

export const Nav = styled.nav`
  background: red;
  grid-area: Nav;
`;

export const Search = styled.nav`
  background: yellow;
  grid-area: Search;
`;

export const Main = styled.section`
  background: violet;
  grid-area: Main;
`;

export const Foot = styled.footer`
  background: yellow;
  grid-area: Foot;
`;
