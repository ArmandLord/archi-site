import React from 'react';
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import arqGab from '../../Assets/arquitecto1.jpg'
import arqArm from '../../Assets/arquitecto2.jpg'
import arqSam from '../../Assets/arquitecta1.jpg'
import sobreNostros from '../../Assets/arquitectos-grupo1.jpg'
import acercamiento from '../../Assets/diseño-plano.jpg'
import propiedad1 from '../../Assets/vista-diagonal.jpg'
import propiedad2 from '../../Assets/vista-frente-dark.jpg'
import propiedad3 from '../../Assets/vista-frente.jpeg'
import { CarouselC } from '../../components';


const Home = () => {
  return (
    <div>
      <Navbar />
      
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ backgroundColor: '#e1e1e1', height: '100vh', width: '100%', textAlign: 'center' }}><CarouselC/></div>

        <div style={{ width: '100%', height: '60vh', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', padding: '1em', gap: '1em', backgroundColor: 'darkGray' }}>
          <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', align: 'center', justifyContent: 'center'}}>
            <h2>Sobre Nosotros</h2>

            <p>Somos un equipo de arquitectos, urbanistas y diseñadores de interiores ubicados en Milan y Napoles con una red doméstica y oficinas internacionales.</p>
            <img alt="imagen" style={{ width: '50%', margin: '0 auto' , height: '60%'}} src={sobreNostros} />

            <Link to='/about'>Leer más</Link>
          </div>

          <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', align: 'center', justifyContent: 'center' }}>
            <h2>Nuestro Acercamiento</h2>
            <p>Nos asociamos con nuestros clientes -volviéndonos su equipo de desarrollo- para entender su visión, negocio, objetivos y oportunidades de mercado.</p>
            <img alt="imagen" style={{ width: '50%', margin: '0 auto', height: '60%' }} src={acercamiento} />
            <Link to='/approach'>Leer más</Link>
          </div>

        </div>
        {/* Fin sobrenosotros acercamiento */}

        <div style={{ width: '100%', height: '70vh', backgroundColor: '#e2e2e2' }}>

          <h2 style={{ textAlign: 'center', height: '15%' }}>Equipo</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: '75%', gap: '1em', padding: '1em' }}>
            <div style={{ backgroundColor: 'white' }}>
              <h3>Gabriel Sanchez</h3>
              <img alt="imagen" src={arqGab} style={{ width: '100%', padding: '1em' }} />
            </div>
            <div style={{ backgroundColor: 'white' }}>
              <h3>Armando Perez</h3>
              <img alt="imagen" src={arqArm} style={{ width: '100%', padding: '1em' }} />
            </div>
            <div style={{ backgroundColor: 'white' }}>
              <h3>Samantha Correa</h3>
              <img alt="imagen" src={arqSam} style={{ width: '100%', padding: '1em' }} />
            </div>
          </div>
        </div>
        {/* Fin equipo */}

        <div style={{backgroundColor: 'white', height: '100%', width: '100%',display: 'flex', flexDirection: 'column'}}>

        <div style={{width:'100%', height:'80vh', display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <div>
        <h2>Propiedad</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ex dui, eget lobortis purus bibendum id. Pellentesque suscipit mauris non porttitor varius. Etiam ullamcorper urna sed egestas egestas. Aliquam maximus augue sed quam accumsan bibendum. Sed euismod vehicula erat ac auctor. Morbi non diam vitae metus scelerisque ullamcorper vitae a erat. Sed eget dignissim metus. Proin fermentum, turpis ut finibus rutrum, ipsum neque auctor tellus, eget blandit orci elit nec est. Donec vitae sapien iaculis, feugiat lorem ac, egestas eros. Cras feugiat erat diam, id ultrices odio molestie gravida. Fusce vitae luctus nibh. Vivamus convallis maximus enim.</p>
        </div>
        <div >
          <img alt="imagen" style={{width:'100%', height:'100%'}} src={propiedad1}/>
        </div>
        </div>

        <div style={{width:'100%', height:'80vh', display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <div>
          <img alt="imagen" style={{width:'100%', height:'100%'}} src={propiedad2}/>
        </div>
        <div>
        <h2>Propiedad</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ex dui, eget lobortis purus bibendum id. Pellentesque suscipit mauris non porttitor varius. Etiam ullamcorper urna sed egestas egestas. Aliquam maximus augue sed quam accumsan bibendum. Sed euismod vehicula erat ac auctor. Morbi non diam vitae metus scelerisque ullamcorper vitae a erat. Sed eget dignissim metus. Proin fermentum, turpis ut finibus rutrum, ipsum neque auctor tellus, eget blandit orci elit nec est. Donec vitae sapien iaculis, feugiat lorem ac, egestas eros. Cras feugiat erat diam, id ultrices odio molestie gravida. Fusce vitae luctus nibh. Vivamus convallis maximus enim.</p>
        </div>
        </div>

        <div style={{width:'100%', height:'80vh', display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <div>
        <h2>Propiedad</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ex dui, eget lobortis purus bibendum id. Pellentesque suscipit mauris non porttitor varius. Etiam ullamcorper urna sed egestas egestas. Aliquam maximus augue sed quam accumsan bibendum. Sed euismod vehicula erat ac auctor. Morbi non diam vitae metus scelerisque ullamcorper vitae a erat. Sed eget dignissim metus. Proin fermentum, turpis ut finibus rutrum, ipsum neque auctor tellus, eget blandit orci elit nec est. Donec vitae sapien iaculis, feugiat lorem ac, egestas eros. Cras feugiat erat diam, id ultrices odio molestie gravida. Fusce vitae luctus nibh. Vivamus convallis maximus enim.</p>
        </div>
        <div>
          <img alt="imagen" style={{width:'100%', height:'100%'}} src={propiedad3}/>
        </div>
        </div>

        </div>

      </div>
      <Footer />
    </div>

  );
};

export default Home;
