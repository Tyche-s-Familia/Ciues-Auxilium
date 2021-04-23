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
    background: black;
    color: white;
}
`;

export default GlobalStyles;

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
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
  grid-area: TopNav;
  display: grid;
  grid-template-areas: 'Logo . Buttons';
`;

export const Logo = styled.div`
  grid-area: Logo;
`;

export const Buttons = styled.div`
  grid-area: Buttons;
`;

export const Button = styled.button`
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
  display: grid;
  grid-template-rows: 15vh auto;
  grid-template-areas: 'TopMain TopMain TopMain'
  'MidMain MidMain MidMain'
`;

export const TopMain = styled.div`
  background: yellow;
  grid-area: TopMain;
`;

export const MidMain = styled.div`
  display: grid;
  grid-area: MidMain;
  grid-template-areas: 'MidBox1 MidBox1 MidBox1'
  'MidBox2 MidBox2 MidBox2'
  'MidBox3 MidBox3 MidBox3'
  'MidBox4 MidBox4 MidBox4'
`;

export const MidBox1 = styled.div`
  grid-area: MidBox1;
  background: red;
  margin: 1em;
`;
export const MidBox2 = styled.div`
  grid-area: MidBox2;
  background: red;
  margin: 1em;
`;
export const MidBox3 = styled.div`
  grid-area: MidBox3;
  background: red;
  margin: 1em;
`;
export const MidBox4 = styled.div`
  grid-area: MidBox4;
  background: red;
  margin: 1em;
`;

export const Foot = styled.footer`
  background: yellow;
  grid-area: Foot;
`;
