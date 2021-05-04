import React from 'react'
import Details from '../detailView/Details';
import ProjectView from '../detailView/ProjectView';

import {
    Main,
    TopMain,
    Button,
    MidMain,
    MidBox1,
    Description
} from '../GlobalStyles'

const MainArea = ({ data }) => {
  console.log(data);
    return (
        <>
        <h1>Test</h1>
        <Main>
            {/* <TopMain>
              <Button to='projects' >PROJECTS</Button>
              <Button to='updates' >UPDATES</Button>
            </TopMain> */}
            <MidMain>
            <h1>TestTop</h1>
              {data.map((item) => {
                console.log(item);
                return (
                  <div classname="midbox" key={item.id}>
                    <h1>Test {item.id}</h1>
                    <ProjectView item={item} />
                  </div>
                )
              })}
            </MidMain>
          </Main>
        </>
    )
}

export default MainArea
