import { useState } from "react";
import { StyledSearchBar, SearchBarInput } from "../../styled-components/SearchBar";
import { NavButton } from "../../styled-components/Navigation";
const SearchBar = ({onSearch, randomSearch}) => {
  const [id, setId]=useState('');

  const handleChange=(e)=>{
    setId(e.target.value)
  }
  


  return (
    <StyledSearchBar>
      <SearchBarInput type="search" value={id} onChange={handleChange}/>
      <NavButton onClick={() => {onSearch(id)}}>Agregar</NavButton> 
      <NavButton onClick={() => {randomSearch()}}>Random</NavButton>
    </StyledSearchBar>
  );
};

export default SearchBar;