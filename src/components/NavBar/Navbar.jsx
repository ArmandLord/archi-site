import React from 'react'
import { Nav, NavLogo, NavLinks, NavLink, NavLinkLogo, NavContainer } from './Navbar.style'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <NavLinkLogo to='/'>ArchiSite<strong>Logo</strong></NavLinkLogo>
                </NavLogo>
                <NavLinks>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>Nosotros</NavLink>
                    <NavLink to='/approach'>Acercamiento</NavLink>
                    <NavLink to='/contact'>Contacto</NavLink>
                </NavLinks>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
