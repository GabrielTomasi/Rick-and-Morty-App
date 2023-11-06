import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavContainer, ButtonContainer, NavButton, StyledNavLink } from "../../styled-components/Navigation.js";
import { Button } from "../../styled-components/LoginForm.js";
const Navigation = ({ onSearch, logout, randomSearch }) => {
  const location = useLocation();
  const unlog = () => {
    logout();
  };

  return (
    <NavContainer>
      <div>
        {location.pathname === "/home" && (
          <SearchBar onSearch={onSearch} randomSearch={randomSearch} />
        )}
      </div>
      <ButtonContainer>
        <NavButton>
          <StyledNavLink to="/about">About </StyledNavLink>
        </NavButton>
        <NavButton>
          <StyledNavLink to="/home">Home </StyledNavLink>
        </NavButton>
        <NavButton onClick={unlog}>
          <StyledNavLink to="/">Log Out </StyledNavLink>
        </NavButton>
        <NavButton>
          <StyledNavLink to="/fav">Favorites </StyledNavLink>
        </NavButton>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Navigation;
