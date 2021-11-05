import styled from 'styled-components'
import { GoMarkGithub } from 'react-icons/go'
import { SiLinkedin, SiGmail } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'



export const ContainerFooter = styled.footer`
    display: flex; 
    align-items: center;
    justify-content: center;
    background: gray;
    /* background: ${p => p.theme.color}; */
    
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 400px;
    z-index: -99;
`

export const FooterMin = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;
    /* padding: 2rem 0 1rem; */
    /* background: red; */
    h2{
        font-size: 1.7rem;
        margin: 0;
        @media screen and (max-width: 770px){
            font-size: 1.3rem;
        }
    }
    small{
        color: #e0e0e0;
        @media screen and (max-width: 770px){
            font-size: .5rem;
        }
    }

`

export const ContainerIcons = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const Icon = styled.a`
    text-decoration: none;
`
export const IconLink = styled(Link)`
    text-decoration: none;   
`

export const IconGitHub = styled(GoMarkGithub)`
    font-size: 1.5rem;
    &:hover{
        transform: scale(1.1);
    }
`
export const IconLinkedIn = styled(SiLinkedin)`
    font-size: 1.5rem;
    &:hover{
        transform: scale(1.1);
    }
`
export const IconInstagram = styled(RiInstagramFill)`
    font-size: 1.5rem;
    &:hover{
        transform: scale(1.1);
    }
`
export const IconEmail = styled(SiGmail)`
    font-size: 1.5rem;
    &:hover{
        transform: scale(1.1);
    }
`