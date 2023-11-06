import styled, { keyframes } from "styled-components";
import { ImgContainer, Wrapper } from "./CharacterCard";
import { TextContainer } from "./About";

const colorAnimation = keyframes`
0%    {color: var(--color-1)}
32%   {color: var(--color-1)}
33%   {color: var(--color-2)}
65%   {color: var(--color-2)}
66%   {color: var(--color-3)}
99%   {color: var(--color-3)}
100%  {color: var(--color-1)}
`;

export const StyledCharacterDetail = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 80px;
  align-items: center;
  justify-content: space-around;
`;

export const DetailWrapper = styled(Wrapper)`
  border: 2px rgba(0, 0, 0, 0.125);
  border-radius: 15px;
  flex-direction: row;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  filter: drop-shadow(50px 30px 10px rgba(0, 0, 0, 0.125));
  width: 50%;
  height: auto;
  box-shadow: 2px 10px rgba(0, 0, 0, 0.125);
`;

export const DetailImgContainer = styled(ImgContainer)`
  display: flex;
  align-self: center;
  justify-self: flex-start;
  width: 25%;
  border-radius: 50%;
`;

export const StyledImage = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const DetailTextContainer = styled(TextContainer)`
  display: flex;
  font-family: "Outfit", sans-serif;
  align-items: center;
  padding: 15px;
  width: 50%;

  & h3 {
    padding: 15px;
    margin: 10px;
    font-weight: 900;
    font-size: 2rem;
    text-transform: uppercase;
    text-decoration: underline;
    --color-1: rgba(130, 19, 190, 1);
    --color-2: #3d8dae;
    --color-3: rgba(82, 159, 57, 1);
    animation: ${colorAnimation} 4s step-start  infinite;
  }
`;
