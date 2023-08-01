import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from 'react-router-dom'

const Navigation = ({onSearch, logout}) => {
  const unlog = ()=>{
    logout()
  }

  return (
    <nav>
      <button><NavLink to='/about' >About </NavLink></button>
      <button><NavLink to='/home' >Home </NavLink></button>
      <button onClick={unlog}><NavLink to='/' >Log Out </NavLink></button>
      <SearchBar onSearch={onSearch}/>
      <button><NavLink to='/favorites' >Favorites </NavLink></button>
    </nav>
  );
};

export default Navigation;
