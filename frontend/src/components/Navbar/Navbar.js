import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../GlobalStyles';

import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon
} from './Navbar.styles';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            Feed
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/about">About</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/login">
                                        <Button primary>Log In</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/login">
                                        <Button primary bigFont onClick={closeMenu}>Log In</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>


                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;