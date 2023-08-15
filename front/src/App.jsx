import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import PageNotFound from "./components/Page no found/Pagenofound";
import { removeFav } from "./redux/actions";
import { useDispatch } from "react-redux";


const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  // const apiKey = "key=henrym-gabrieltomasi";
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const dispatch = useDispatch()
  const onSearch = (id) => {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    ).then(({ data }) => {
      if (data.name) {
        const characterExist = characters.some((char) => char.id === data.id);
        characterExist
          ? window.alert("El personaje ya existe")
          : setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const randomSearch = ()=>{
    const id = Math.floor(Math.random() * 826)
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    ).then(({ data }) => {
      if (data.name) {
        const characterExist = characters.some((char) => char.id === data.id);
        characterExist
          ? window.alert("El personaje ya existe")
          : setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };
  
  const onClose = (id) => {
    console.log(id);
    dispatch(removeFav(id))
    const removeChar = characters.filter((char) => char.id === Number(id))
    setCharacters(removeChar);
  };

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }


  const logout = () => {
    setAccess(false);
    navigate("/");
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" && (<Navigation onSearch={onSearch} logout={logout} randomSearch={randomSearch} />)}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home"element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail characters={characters} />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
