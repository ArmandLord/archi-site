import React from "react";
import propiedad1 from "../../Assets/vista-diagonal.jpg";
import propiedad2 from "../../Assets/vista-frente-dark.jpg";
import propiedad3 from "../../Assets/vista-frente.jpeg";
import { CarouselC, SectionAbout, SectionTeam } from "../../components";
import { ContainerHome } from "./Home.style";

const Home = () => {
  return (
    <ContainerHome>
      <CarouselC />
      <SectionAbout />
      
      {/* Fin sobrenosotros acercamiento */}

      
      {/* Fin equipo */}

      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            // height: "80vh",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div>
            <h2>Propiedad</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ex dui, eget lobortis purus bibendum id. Pellentesque
              suscipit mauris non porttitor varius. Etiam ullamcorper urna sed
              egestas egestas. Aliquam maximus augue sed quam accumsan bibendum.
              Sed euismod vehicula erat ac auctor. Morbi non diam vitae metus
              scelerisque ullamcorper vitae a erat. Sed eget dignissim metus.
              Proin fermentum, turpis ut finibus rutrum, ipsum neque auctor
              tellus, eget blandit orci elit nec est. Donec vitae sapien
              iaculis, feugiat lorem ac, egestas eros. Cras feugiat erat diam,
              id ultrices odio molestie gravida. Fusce vitae luctus nibh.
              Vivamus convallis maximus enim.
            </p>
          </div>
          <div>
            <img
              alt="imagen"
              style={{ width: "100%", height: "100%" }}
              src={propiedad1}
            />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            // height: "80vh",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div>
            <img
              alt="imagen"
              style={{ width: "100%", height: "100%" }}
              src={propiedad2}
            />
          </div>
          <div>
            <h2>Propiedad</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ex dui, eget lobortis purus bibendum id. Pellentesque
              suscipit mauris non porttitor varius. Etiam ullamcorper urna sed
              egestas egestas. Aliquam maximus augue sed quam accumsan bibendum.
              Sed euismod vehicula erat ac auctor. Morbi non diam vitae metus
              scelerisque ullamcorper vitae a erat. Sed eget dignissim metus.
              Proin fermentum, turpis ut finibus rutrum, ipsum neque auctor
              tellus, eget blandit orci elit nec est. Donec vitae sapien
              iaculis, feugiat lorem ac, egestas eros. Cras feugiat erat diam,
              id ultrices odio molestie gravida. Fusce vitae luctus nibh.
              Vivamus convallis maximus enim.
            </p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            // height: "80vh",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div>
            <h2>Propiedad</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ex dui, eget lobortis purus bibendum id. Pellentesque
              suscipit mauris non porttitor varius. Etiam ullamcorper urna sed
              egestas egestas. Aliquam maximus augue sed quam accumsan bibendum.
              Sed euismod vehicula erat ac auctor. Morbi non diam vitae metus
              scelerisque ullamcorper vitae a erat. Sed eget dignissim metus.
              Proin fermentum, turpis ut finibus rutrum, ipsum neque auctor
              tellus, eget blandit orci elit nec est. Donec vitae sapien
              iaculis, feugiat lorem ac, egestas eros. Cras feugiat erat diam,
              id ultrices odio molestie gravida. Fusce vitae luctus nibh.
              Vivamus convallis maximus enim.
            </p>
          </div>
          <div>
            <img
              alt="imagen"
              style={{ width: "100%", height: "100%" }}
              src={propiedad3}
            />
          </div>
        </div>
      </div>
      <SectionTeam />
    </ContainerHome>
  );
};

export default Home;
