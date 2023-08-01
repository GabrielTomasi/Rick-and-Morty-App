import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

import style from "./App.css";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites'


const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
 const apiKey='key=henrym-gabrieltomasi'
  const onSearch = (id) => {
    axios(`https://rym2-production.up.railway.app/api/character/${id}?${apiKey}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "gabrieltomasi22@gmail.com";
  const PASSWORD = "Asd1234";

  const login = (userData) => {
    console.log(userData);
    if (userData?.password === PASSWORD && userData?.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  const logout = ()=>{
    setAccess(false);
      navigate("/");
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className={style.conteiner}>
      {location.pathname !== "/" ? <Navigation onSearch={onSearch} logout={logout}/> : ""}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={<Detail characters={characters} />}
        />
        <Route
          path="/favorites"
          element={<Favorites/>}
        />
      </Routes>
    </div>
  );
};

export default App;