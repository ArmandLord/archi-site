import styled from 'styled-components'
import { Container } from '../../GlobalStyles/GlobalStyles'
import { RiInstagramFill } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'

export const ContainerSectionTeam = styled(Container)`
    width: 100%;
    /* background: red; */
    padding-bottom: 2rem;
    /* padding:  4rem; */
    h2{
      margin: 0 0 2rem 1rem;
      display: flex;
      width: 100%;
      font-size: 2rem;
      text-align: start;
    }
`

export const ContSecTeam = styled.div`
    width: 100%;
    /* background: pink;  */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    /* grid-auto-rows: 22rem; */
    /* grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); */
    /* grid-template-rows: repeat(3, 1fr) grid; */
    /* height:  75% grid; */
    /* gap:  1em grid; */
    padding: 1rem 0;

    
`

export const CardTeam = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: red;
  flex-direction: column;
  margin: 0 1rem;
  height: 350px;
  width: 350px;
  border-top-left-radius: 100%;
  /* border: 1px solid red; */

  img{
    width: 60%;
    height: 60%;
    object-fit: cover;
    border-radius: 50%;
    border: 6px solid red;

  }

  h3{
    padding-left: 2rem;
    color: #ffffff;
    font-size: 1.2rem;
    /* background: red; */
  }
`
export const CardTeamIcons = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* background: green; */
`
export const Insta = styled(RiInstagramFill)`
  font-size: 1.3rem;
  color: #ffffff;
`
export const Face = styled(BsFacebook)`
  font-size: 1.3rem;
  color: #ffffff;
`
export const LikedIn = styled(ImLinkedin2)`
  font-size: 1.3rem;
  color: #ffffff;
`