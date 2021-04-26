import React, { useState, useRef } from "react";

import {
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
} from '../GlobalStyles';

export default function Feed() {

    const [input, setInput] = useState("");
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();

    const onFormSubmit = e => {
        e.preventDefault();
        setInput("");
        setBarOpened(false);
        console.log(`Was submitted with input: ${input}`);
    };

    return (
        <Wrapper>
          <TopNav>
              <Logo>Ciues-Auxilium</Logo>
            <Buttons>
              <Button to='/login' >Log In</Button>
              <Button to='/account' >Account</Button>
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
                <NavItem to="/development">Development</NavItem>
                <NavItem to="/arts">Arts</NavItem>
                <NavItem to="/journalism">Journalism</NavItem>
                <NavItem to="/entertainment">Entertainment</NavItem>
              </NavItems>
          </Nav>
          <Main>
            <TopMain>
              <Button to='projects' >PROJECTS</Button>
              <Button to='updates' >UPDATES</Button>
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
            <GitLink to='github' >GitHub</GitLink>
            <Philosophy to='philosophy' >Philosophy</Philosophy>
          </Foot>
        </Wrapper>
    );
};
