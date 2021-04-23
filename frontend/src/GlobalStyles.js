import styled, {createGlobalStyle, css } from "styled-components";

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
  font-size: 18px;
  padding: 9px 12px;
  font-weight: 700;
  grid-area: Logo;
`;

export const Buttons = styled.div`
  grid-area: Buttons;
`;

export const Button = styled.button`
  padding: 5px 12px;
  color: black;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color1};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  margin: 1rem;
`;

export const Nav = styled.nav`
  grid-area: Nav;
  display: flex;
  align-items: center;
  @media (max-width: 786px) {
        flex-direction: column;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  align-items: center;
  &:hover {
        transform: scale(1.05);
  }
`;

export const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  transition: 250ms;
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Search = styled.nav`
  grid-area: Search;
  display: grid;
  grid-template-areas: 'Form . .';
`;

export const Form = styled.form`
  grid-area: Form;
  margin-left: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${props => (props.barOpened ? "30rem" : "8rem")};
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: Black;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const FormButton = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: black;
`;

export const Main = styled.section`
  grid-area: Main;
  display: grid;
  grid-template-rows: 6vh auto;
  grid-template-areas: 'TopMain TopMain TopMain'
  'MidMain MidMain MidMain'
`;

export const TopMain = styled.div`
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
  background: white;
  margin: 1em;
`;
export const MidBox2 = styled.div`
  grid-area: MidBox2;
  background: white;
  margin: 1em;
`;
export const MidBox3 = styled.div`
  grid-area: MidBox3;
  background: white;
  margin: 1em;
`;
export const MidBox4 = styled.div`
  grid-area: MidBox4;
  background: white;
  margin: 1em;
`;

export const Foot = styled.footer`
  background: white;
  color: black;
  grid-area: Foot;
  display: grid;
  grid-template-areas:
  'GitLink . Philosophy'
`;

export const GitLink = styled.a`
  grid-area: GitLink;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 700;
  appearance: none;
  cursor: pointer;
`;

export const Philosophy = styled.a`
  grid-area: Philosophy;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 700;
  appearance: none;
  cursor: pointer;
`;
