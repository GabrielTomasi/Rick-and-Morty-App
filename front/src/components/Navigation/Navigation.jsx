import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from 'react-router-dom'
import { useLocation } from "react-router-dom";
const Navigation = ({onSearch, logout, randomSearch}) => {
  const location = useLocation()
  const unlog = ()=>{
    logout()
  }
 
  return (
    <nav>
      <button><NavLink to='/about' >About </NavLink></button>
      <button><NavLink to='/home' >Home </NavLink></button>
      <button onClick={unlog}><NavLink to='/' >Log Out </NavLink></button>
      {location.pathname === '/home' && (<SearchBar onSearch={onSearch} randomSearch={randomSearch} />)}
      <button><NavLink to='/favorites' >Favorites </NavLink></button>
    </nav>
  );
};

export default Navigation;
