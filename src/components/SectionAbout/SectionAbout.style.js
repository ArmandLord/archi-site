import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Container } from '../../GlobalStyles/GlobalStyles';


export const ContainerTotal = styled.div`
    background: #ffffff;
    width: 100%;
    padding: 4rem 0;
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);  */

`
export const ContainerSectionAbout = styled(Container)`
    /* background: red; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    /* padding: 0 1rem; */

`

export const AboutCard = styled.div`
    /* background: green; */
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    width: 400px;
    margin: 1rem 0 2rem;
     

    p{
        text-align: center;
    }
`
export const Circle = styled.div`
   background: red;
   width: 50px;
   height: 50px;
   border-radius: 50%;
`
export const Triangle = styled.div`
    /* background: red; */
    /* width: 100px;
    height: 100px; */
    border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-bottom: 50px solid red;
`
export const Square = styled.div`
    background: red;
    width: 50px;
    height: 50px;
   
`
export const LinkMore = styled(Link)`
    text-decoration: none;
`