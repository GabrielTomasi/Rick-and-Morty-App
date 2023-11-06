import styled, { keyframes, createGlobalStyle } from "styled-components";

export const LogginForm = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 1em;
  margin: 1em;
  border: 1px solid;
  width: 600px;
  height: 600px;
  box-shadow: 0px 0px 15px black;
`;

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  margin: 0;
  width: 100%;
  min-height: 100%;
  min-width: 414px;
  max-width: 414px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:focus &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
min-width: 100px;
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #E93333;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    background: black;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;



export const InputsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-self: center;
  max-width: 100%;
  margin-bottom: 0.9rem;
  color: #FFF5EE;
  font-size: small;
font-weight: bolder;
`;

