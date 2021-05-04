import React from 'react'

import TopNavBar from '../feedView/TopNavBar'
import Footer from '../feedView/Footer'
import AuthorView from './AuthorView'
import ProjectView from './ProjectView'
import SupportedView from './SupportedView'

import {
    Wrapper,
} from './UsersStyles'

const Users = () => {
    return (
        <>
            <Wrapper>
                <TopNavBar />
                <AuthorView />
                <ProjectView />
                <SupportedView />
                <Footer />
            </Wrapper>
        </>
    )
}

export default Users
