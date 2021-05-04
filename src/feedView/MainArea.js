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
    return (
        <>
        <Main>

            <MidMain>
              {data.map((item) => {
                return (
                  <div classname="midbox" key={item.id}>
                    <h1>{item.id}{item.name}</h1>
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
