import React from "react";
import arqGab from "../../Assets/arquitecto1.jpg";
import arqArm from "../../Assets/arquitecto2.jpg";
import arqSam from "../../Assets/arquitecta1.jpg";
import { ContainerSectionTeam, ContSecTeam, CardTeam, CardTeamIcons, Insta, Face, LikedIn } from './SectionTeam.style'
import { ContainerTotal } from '../SectionAbout/SectionAbout.style'

const SectionTeam = () => {
  return (
    <ContainerTotal>
      <ContainerSectionTeam>
        <h2 style={{ textAlign: "center" }}>Equipo</h2>
        <ContSecTeam>
          <CardTeam>
            <img alt="imagen" src={arqGab}  />
            <h3>Gabriel Sanchez</h3>
            <CardTeamIcons>
              <Insta/>
              <Face/>
              <LikedIn/>

            </CardTeamIcons>
          </CardTeam>
          <CardTeam>
            <img alt="imagen" src={arqArm}  />
            <h3>Armando Perez</h3>
            <CardTeamIcons>
              <Insta/>
              <Face/>
              <LikedIn/>

            </CardTeamIcons>
          </CardTeam>
          <CardTeam>
            <img alt="imagen" src={arqSam}  />
            <h3>Samantha Correa</h3>
            <CardTeamIcons>
              <Insta/>
              <Face/>
              <LikedIn/>

            </CardTeamIcons>
          </CardTeam>
        </ContSecTeam>
      </ContainerSectionTeam>
    </ContainerTotal>
  );
};

export default SectionTeam;
