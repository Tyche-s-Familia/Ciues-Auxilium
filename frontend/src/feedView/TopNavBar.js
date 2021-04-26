import React from 'react'

import {
    TopNav,
    Buttons,
    Button,
    Logo
} from '../GlobalStyles'

const TopNavBar = () => {
    return (
        <TopNav>
            <Logo>Ciues-Auxilium</Logo>
            <Buttons>
              <Button to='/login' >Log In</Button>
              <Button to='/account' >Account</Button>
            </Buttons>
        </TopNav>
    );
};

export default TopNavBar
