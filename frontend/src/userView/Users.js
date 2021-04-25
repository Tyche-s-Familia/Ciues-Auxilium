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
        </Router>
    )
};

export default Users;
