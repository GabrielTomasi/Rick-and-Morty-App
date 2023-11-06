import styled from "styled-components";
import logo from "../images/Rick_and_Morty.svg.png"
import {keyframes} from "styled-components";


const imgEffect = keyframes`
0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
`
export const StyledFormConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 414px;
border: 1px solid;
border-radius:15px;
margin: 0px 15px;
background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 20px 20px 50px grey;
`

export const PrimaryConteiner = styled.div`
display:flex;
flex-direction: row-reverse;
align-items: center;
justify-content: space-around;
width: 100vw;
height: 100vh
`


export const Logo = styled.div`
display:flex;

background: url(${logo});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
width: 25%;
height:100%;
animation: ${imgEffect} 500ms ease-out alternate forwards;

:hover{
    animation: ${imgEffect} 500ms ease-out infinite alternate forwards;
}
`