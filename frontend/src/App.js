import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {
  GlobalStyles,
  Wrapper,
  TopNav,
  Search,
  Nav,
  Main,
  TopMain,
  MidMain,
  MidBox1,
  MidBox2,
  MidBox3,
  MidBox4,
  Buttons,
  Logo,
  Button,
  Foot
} from './GlobalStyles';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
        <Wrapper>
          <TopNav>
            <Logo>Logo</Logo>
            <Buttons>
              <Button>Log In</Button>
              <Button>Account</Button>
            </Buttons>
          </TopNav>
          <Search />
          <Nav />
          <Main>
            <TopMain />
            <MidMain>
              <MidBox1 />
              <MidBox2 />
              <MidBox3 />
              <MidBox4 />
            </MidMain>
          </Main>
          <Foot />
        </Wrapper>
    </Router>
  )
}
