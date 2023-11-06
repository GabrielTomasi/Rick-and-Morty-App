import styled from "styled-components";
import img from "../assets/950223-digital-art-artwork-TV-TV-Series-Adult-Swim-Rick-and-Morty.jpg"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: cover;

`;
