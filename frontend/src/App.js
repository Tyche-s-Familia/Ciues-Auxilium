import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {
  GlobalStyles,
  Wrapper,
  TopNav,
  Search,
  Nav,
  Main,
  Foot
} from './GlobalStyles';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
        <Wrapper>
          <TopNav />
          <Search />
          <Nav />
          <Main />
          <Foot />
        </Wrapper>
    </Router>
  )
}
