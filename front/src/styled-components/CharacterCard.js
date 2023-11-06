import styled from "styled-components";


export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 350px;
  width: 250px;
  background-color: rgba(17, 25, 40, 0.25);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 25px;
  margin: 40px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;
export const StyledImg = styled.img`
  display: flex;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
  transition: all 0.5s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    filter: grayscale(100%);
    filter: opacity(0.4);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    font-weight: bolder;
  }
`;
