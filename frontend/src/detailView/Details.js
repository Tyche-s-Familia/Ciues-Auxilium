import React from 'react';

import {
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
            <>
            <Wrapper>
                <TopNav>
                    <Logo>Ciues-Auxilium</Logo>
                    <Buttons>
                        <Button to='/login' >Log In</Button>
                        <Button to='/account' >Account</Button>
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
            </>
    );
};

export default Details;
