import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = ({characters}) => {
  const [character, setCharacter] = useState({});
  const {id} = useParams();
  const apiKey='key=henrym-gabrieltomasi'
   useEffect(() => {
    axios(`https://rym2-production.up.railway.app/api/character/${id}?${apiKey}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  
  return (
    <div>
    <h2>Name: {character.name && character.name}</h2>
    <h2>Status: {character.status && character.status}</h2>
    <h2>Species: {character.species && character.species}</h2>
    <h2>Gender: {character.gender && character.gender}</h2>
    <h2>Origin: {character.origin?.name && character.origin?.name}</h2>
    <img src={character.image && character.image} alt={character.name && character.name} />
    </div>
  )
};
export default Detail;
