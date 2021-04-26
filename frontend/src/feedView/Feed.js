import React from "react";
import SearchBar from './SearchBar'

import {
  Wrapper,
  TopNav,
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
  GitLink,
  Philosophy,
  Img,
  Description,
  Info,
  Foot
} from '../GlobalStyles';

export default function Feed() {

    return (
        <Wrapper>
          <TopNav>
              <Logo>Ciues-Auxilium</Logo>
            <Buttons>
              <Button to='/login' >Log In</Button>
              <Button to='/account' >Account</Button>
            </Buttons>
          </TopNav>
          <SearchBar />
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
