import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {
  GlobalStyles,
  Wrapper,
  TopNav,
  Search,
  Nav,
  NavItems,
  NavItem,
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
  FormButton,
  GitLink,
  Philosophy,
  Input,
  Form,
  Img,
  Description,
  Info,
  Foot
} from './GlobalStyles';

export default function App() {

  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = e => {
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    console.log(`Was submited with input: ${input}`);
  };

  return (
    <Router>
      <GlobalStyles />
        <Wrapper>
          <TopNav>
            <Logo>Ciues-Auxilium</Logo>
            <Buttons>
              <Button>Log In</Button>
              <Button>Account</Button>
            </Buttons>
          </TopNav>
          <Search>
            <Form
              barOpened={barOpened}
              onClick={() => {
                setBarOpened(true);
                inputFocus.current.focus();
              }}
              onFocus={() => {
                setBarOpened(true);
                inputFocus.current.focus();
              }}
              onBlur={() => {
                setBarOpened(false);
              }}
              onSubmit={onFormSubmit}
              ref={formRef}
            >
              <FormButton type="submit" barOpened={barOpened}>
                Search:
              </FormButton>
              <Input
                onChange={e => setInput(e.target.value)}
                ref={inputFocus}
                value={input}
                barOpened={barOpened}
                placeholder="Search here..."
              />
            </Form>
          </Search>
          <Nav>
              <NavItems>
                <NavItem to="/">Development</NavItem>
                <NavItem to="/">Arts</NavItem>
                <NavItem to="/">Journalism</NavItem>
                <NavItem to="/">Entertainment</NavItem>
              </NavItems>
          </Nav>
          <Main>
            <TopMain>
              <Button>PROJECTS</Button>
              <Button>UPDATES</Button>
            </TopMain>
            <MidMain>
              <MidBox1>
                <Img>Img</Img>
                <Info>Info</Info>
                <Description>Description</Description>
              </MidBox1>
              <MidBox2>
                <Img>Img</Img>
                <Info>Info</Info>
                <Description>Description</Description>
              </MidBox2>
              <MidBox3>
                <Img>Img</Img>
                <Info>Info</Info>
                <Description>Description</Description>
              </MidBox3>
              <MidBox4>
                <Img>Img</Img>
                <Info>Info</Info>
                <Description>Description</Description>
              </MidBox4>
            </MidMain>
          </Main>
          <Foot>
            <GitLink>GitHub</GitLink>
            <Philosophy>Philosophy</Philosophy>
          </Foot>
        </Wrapper>
    </Router>
  )
}
