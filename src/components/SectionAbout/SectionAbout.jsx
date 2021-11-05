import React from "react";
// import sobreNostros from "../../Assets/arquitectos-grupo1.jpg";
// import acercamiento from "../../Assets/diseño-plano.jpg";
import {
  ContainerSectionAbout,
  AboutCard,
  Circle,
  Square,
  Triangle,
  LinkMore,
  ContainerTotal
} from "./SectionAbout.style";

const SectionAbout = () => {
  return (
    <ContainerTotal>
      <ContainerSectionAbout>
        <AboutCard>
          <Circle />
          <h2>Sobre Nosotros</h2>

          <p>
            Somos un equipo de arquitectos, urbanistas y diseñadores de
            interiores ubicados en Milan y Napoles con una red doméstica y
            oficinas internacionales.
          </p>
          {/* <img
          alt="imagen"
          style={{ width: "50%", margin: "0 auto", height: "60%" }}
          src={sobreNostros}
        /> */}

          <LinkMore to="/about">Leer más</LinkMore>
        </AboutCard>

        <AboutCard>
          <Triangle />
          <h2>Nuestro Acercamiento</h2>
          <p>
            Nos asociamos con nuestros clientes -volviéndonos su equipo de
            desarrollo- para entender su visión, negocio, objetivos y
            oportunidades de mercado.
          </p>
          {/* <img
          alt="imagen"
          style={{ width: "50%", margin: "0 auto", height: "60%" }}
          src={acercamiento}
        /> */}
          <LinkMore to="/approach">Leer más</LinkMore>
        </AboutCard>

        <AboutCard>
          <Square />

          <h2>Nuestro Acercamiento</h2>
          <p>
            Nos asociamos con nuestros clientes -volviéndonos su equipo de
            desarrollo- para entender su visión, negocio, objetivos y
            oportunidades de mercado.
          </p>
          {/* <img
          alt="imagen"
          style={{ width: "50%", margin: "0 auto", height: "60%" }}
          src={acercamiento}
        /> */}
          <LinkMore to="/approach">Leer más</LinkMore>
        </AboutCard>
      </ContainerSectionAbout>
    </ContainerTotal>
  );
};

export default SectionAbout;
