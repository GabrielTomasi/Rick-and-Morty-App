import { useState } from "react";

const SearchBar = ({onSearch, randomSearch}) => {
  const [id, setId]=useState('');

  const handleChange=(e)=>{
    setId(e.target.value)
  }
  


  return (
    <div>
      <input type="search" value={id} onChange={handleChange}/>
      <button onClick={() => {onSearch(id)}}>Agregar</button>
      <button onClick={() => {randomSearch()}}>Random</button>
    </div>
  );
};

export default SearchBar;