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

  const navigate = useNavigate();
  const [accessUser, setAccessUser] = useState(false);

  const dispatch = useDispatch();
  const onSearch = async (id) => {
    if(!id) return window.alert ("Enter a number between 1 and 826")
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = response.data;
      if (data.name) {
        const characterExist = characters.some((char) => char.id === data.id);
        characterExist
          ? window.alert("El personaje ya existe")
          : setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  const randomSearch = () => {
    const id = Math.floor(Math.random() * 826);
    onSearch(id);
  };

  
  const onClose = (id) => {

    dispatch(removeFav(id));
    const removeChar = characters.filter((char) => char.id !== Number(id));
    setCharacters(removeChar);
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login";
      const response = await axios(URL + `?email=${email}&password=${password}`);
      const data = response.data;
      const { access } = data;
      console.log(access)
      setAccessUser(access);
      navigate("/home");
    } catch (error) {
      window.alert("Pusiste mal la clave mi Rey");
    }
  };

  const logout = () => {
    setAccessUser(false);
    navigate("/");
  };
  useEffect(() => {
    !accessUser && navigate("/");
  }, [accessUser]);

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Navigation
          onSearch={onSearch}
          logout={logout}
          randomSearch={randomSearch}
        />
      )}

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
        <Route path="/fav" element={<Favorites onClose={onClose}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
