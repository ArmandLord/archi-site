import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../GlobalStyles/GlobalStyles'


export const Nav = styled.div`
    background: #ffffff;
    width: 100%;
    height: 60px;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999;

`
export const NavContainer = styled(Container)`
    height: 100%;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999; */

    ${Container}

`
export const NavLogo = styled.div`
  
   height: 100%;
   width: 30%;
   padding-left: 1rem;
   display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const NavLinks = styled.div`
   
   height: 100%;
   width: 70%;
   padding-right: 1rem;
   display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const NavLink = styled(Link)`
    margin-left: 2rem;
    text-decoration: none;
    color: #8a8a8a;
    font-size: .9rem;
    &:hover{
        color: #000000;
    }
`
export const NavLinkLogo = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1.1rem;
    strong{
        color: red;
        font-size: 1.4rem;
        font-weight: bolder;
    }
`

