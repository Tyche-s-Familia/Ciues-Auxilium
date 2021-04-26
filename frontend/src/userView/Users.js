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
    Author,
    AuthorName,
    AuthorImg,
    AuthorDetail,
    Project,
    UserPro,
    Names,
    Details,
    Supported,
    NameSup,
    DetailsSup,
    UserSup
} from './UsersStyles'

const Users = () => {
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
                <Author>
                    <AuthorName>AUTHOR NAME && BIO</AuthorName>
                    <AuthorImg>IMG</AuthorImg>
                    <AuthorDetail>Detail</AuthorDetail>
                </Author>
                <Project>
                    <UserPro>USER’S PROJECTS</UserPro>
                    <Names>Name of PROJECTS</Names>
                    <Details>Detail of PROJECTS</Details>
                </Project>
                <Supported>
                    <UserSup>USER’S SUPPORTED PROJECTS</UserSup>
                    <NameSup>Name of SUPPORTED</NameSup>
                    <DetailsSup>Detail of SUPPORTED</DetailsSup>
                </Supported>
                <Foot>
                    <GitLink>GitHub</GitLink>
                    <Philosophy>Philosophy</Philosophy>
                </Foot>
            </Wrapper>
        </>
    )
};

export default Users;
