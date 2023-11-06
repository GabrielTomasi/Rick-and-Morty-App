import styled, { keyframes } from "styled-components";
import { Button } from "./LoginForm";
import { NavLink } from "react-router-dom";

const gradient = keyframes`
0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}`;

export const NavContainer = styled.nav`
  display: flex;
  z-index: 100;
  position: fixed;
  left: 0.5%;
  top: 0;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 99%;
  height: 50px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  border: 2px solid black;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 75%;
  height: 100%;
  background-attachment: fixed;
  margin-right: 15px;
  padding: 10px;
`;

export const NavButton = styled(Button)`
  margin: 5px;
  background: none;
  border: 1px solid #eee;
  height: auto;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`;
