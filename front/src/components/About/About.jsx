import React from "react";
import image from "../../assets/aboutimage.png";

import linkedin from "../../assets/Linkedin-Logo.png"
import github from "../../assets/GitHub-logo.png"
import gmail from "../../assets/Gmail_Logo.png"

import { AboutContainer, CardAboutContainer, AboutWapper, ImgContainer, Image, TextContainer } from "../../styled-components/About";
const About = () => {
  return (
    <AboutContainer >
      <CardAboutContainer >
        <AboutWapper >
          <ImgContainer>
            <Image src={image} alt="aboutImage" />
          </ImgContainer>
          <TextContainer>
            <h2>ABOUT ME</h2>
            <div>
              <p>
                ¡Bienvenidos! 😊 Soy un Desarrollador Web Full Stack en búsqueda
                activa de emocionantes oportunidades laborales 💻.
                <br></br>
                Mi pasión por la tecnología me ha llevado a sumergirme en un
                mundo de aprendizaje constante, dominando tecnologías esenciales
                como JavaScript, HTML, CSS y NodeJS. Además, he ampliado mi
                conocimiento al trabajar con diversos marcos de desarrollo,
                tales como React y Express, y he desarrollado habilidades en la
                creación de bases de datos utilizando PostgreSQL.
                <br />
                <br />
                En este proyecto, me aventuré a utilizar la API de  <a
                  href="https://rickandmortyapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rick and Morty
                </a>para concebir un buscador de personajes, brindando a los usuarios la posibilidad de seleccionar sus favoritos, ordenarlos y filtrarlos según sus preferencias, y acceder a información detallada de cada uno.
                <br />
                <br />
                Si deseas contactarme, aquí tienes mis datos:
                <br />
                <br />
                <a
                  href="https://www.linkedin.com/in/gabrieltomasi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a
                  href="https://github.com/GabrielTomasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="linkedin" />
                </a>
                <a
                  href="mailto:gabrieltomasi22@gmail.com?Subject=Agenda%20De%20Entrevista%20Para:"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gmail} alt="linkedin" />
                </a>
                <br />
                <br />
                <br />
                gabrieltomasi22@gmail.com
              </p>
            </div>
          </TextContainer>
        </AboutWapper>
      </CardAboutContainer>
    </AboutContainer>
  );
};

export default About;
