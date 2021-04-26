import React from 'react'

import {
    Main,
    TopMain,
    Button,
    MidMain,
    MidBox1,
    MidBox2,
    MidBox3,
    MidBox4,
    Img,
    Info,
    Description
} from '../GlobalStyles'

const MainArea = () => {
    return (
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
    )
}

export default MainArea
