import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

import {
    GlobalStyles,
    TopNav,
    Logo,
    Button,
    Buttons,
    Foot,
    GitLink,
    Philosophy
} from '../GlobalStyles'

import {
    Wrapper,
    ProjectInfo,
    Updates,
    ProjectUpdates,
    UpdateDate,
    Description
} from './DetailsStyles'

const Details = () => {
    return (
        <Router>
            <GlobalStyles />
            <Wrapper>
                <TopNav>
                    <Link exact path='/feed'>
                        <Logo>Ciues-Auxilium</Logo>
                    </Link>
                    <Buttons>
                        <Link to='/login'>
                            <Button>Log In</Button>
                        </Link>
                        <Link to='/users'>
                            <Button>Account</Button>
                        </Link>
                    </Buttons>
                </TopNav>
                <ProjectInfo />
                <Updates>
                    <ProjectUpdates>USER’S PROJECTS</ProjectUpdates>
                    <UpdateDate>Name of PROJECTS</UpdateDate>
                    <Description>Detail of PROJECTS</Description>
                </Updates>
                <Foot>
                    <GitLink>GitHub</GitLink>
                    <Philosophy>Philosophy</Philosophy>
                </Foot>
            </Wrapper>
        </Router>
    );
};

export default Details;
