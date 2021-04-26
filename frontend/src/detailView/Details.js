import React from 'react'

import TopNavBar from '../feedView/TopNavBar'
import Footer from '../feedView/Footer'
import ProjectView from './ProjectView'
import UpdatesView from './UpdatesView'

import {
    Wrapper
} from './DetailsStyles'

const Details = () => {
    return (
        <>
            <Wrapper>
                <TopNavBar />
                <ProjectView />
                <UpdatesView />
                <Footer />
            </Wrapper>
        </>
    )
}

export default Details
