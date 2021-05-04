import React from 'react'

import {
    Main,
    TopMain,
    Button,
    MidMain,
    MidBox1,
    Description
} from '../GlobalStyles'

const MainArea = ({ data }) => {
    return (
        <Main>
            <TopMain>
              <Button to='projects' >PROJECTS</Button>
              <Button to='updates' >UPDATES</Button>
            </TopMain>
            <MidMain>
              {data.map((item) => {
                return (
                  <MidBox1 key={item.id}>
                    <Description item={item} />
                  </MidBox1>
                )
              })}
            </MidMain>
          </Main>
    )
}

export default MainArea
