import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  text-align: center;
  margin: 30px;
`;

export const AboutWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 95%;
  width: 75%;
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  filter: drop-shadow(50px 30px 10px rgba(0, 0, 0, 0.125));
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  padding: 25px;
  margin: 30px 15px;
  overflow: hidden;
  margin-top: 75px
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-self: center;
  height: 50%;
  width: 15%;
  border-radius: 12px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  
`;

export const TextContainer = styled.div`
  color: rgba(33, 30, 34, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0;
  margin-top: 10px;
  height: 75%;
  width: 75%;
  border-radius: 12px;
  text-justify: newspaper;
  

  & h2 {
 
    font-family: "Outfit", sans-serif;
    font-size: 2rem;
    margin-right: 25px;
    text-transform: uppercase;
    padding-top: 5px;
    font-weight:900;
  }

  & p {

    text-align: center;
    font-size: 1.2rem;
    line-height: 100%;
    letter-spacing: 2px;
    padding-top: 5px;
    font-weight:500;
  }
  & a {
    text-decoration: none;
    padding-bottom: 15px;
  }
  & img {
    width: 100px;
  }
`;
