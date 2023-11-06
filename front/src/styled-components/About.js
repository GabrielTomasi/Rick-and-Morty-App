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
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.125);
  padding: 25px;
  margin: 30px 15px;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-self: center;
  height: 50%;
  width: 20%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
  overflow: hidden;
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
`;

export const TextContainer = styled.div`
  color: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0;
  margin-top: 10px;
  height: 75%;
  width: 75%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
  text-justify: newspaper;

  & h2 {
    color: rgba(255, 255, 255, 0.98);
    font-family: "Outfit", sans-serif;
    font-size: 2rem;
    margin-right: 25px;
    text-transform: uppercase;
    padding-top: 5px
  }

  & p {
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    line-height: 100%;
    letter-spacing: 2px;
    padding-top: 5px
  }
  & a {
    text-decoration: none;
    padding-bottom: 15px;
  }
  & img {
    width: 100px;
  }
`;
