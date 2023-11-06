import styled from "styled-components";

export const StyledConteiner = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  justify-content: space-around;
    border: solid black;
    overflow: auto;
`;

export const FilterOrder = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 15px;
  margin-top:35px;

  & select {
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
    font-family: "Outfit", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }

  & label{
    text-transform: uppercase;
    margin: 5px;
    display: flex;
  }

  & input{
    margin: 5px;
    width: 20px;
    color: black
  }
`;

export const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Outfit", sans-serif;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-self: right;
  align-items: center;
  width: 120%;
  height: 100vh;
  position: relative;
`
