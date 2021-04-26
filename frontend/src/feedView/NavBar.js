import React from 'react'

import {
    Nav,
    NavItems,
    NavItem
} from '../GlobalStyles'

const NavBar = () => {
    return (
        <Nav>
            <NavItems>
                <NavItem to="/development">Development</NavItem>
                <NavItem to="/arts">Arts</NavItem>
                <NavItem to="/journalism">Journalism</NavItem>
                <NavItem to="/entertainment">Entertainment</NavItem>
            </NavItems>
        </Nav>
    )
}

export default NavBar
