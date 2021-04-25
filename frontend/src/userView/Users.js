import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
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
    Project,
    Supported
} from './UsersStyles'

export const Users = () => {
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
                <Author />
                <Project />
                <Supported />
                <Foot>
                    <GitLink>GitHub</GitLink>
                    <Philosophy>Philosophy</Philosophy>
                </Foot>
            </Wrapper>
        </Router>
    )
};
