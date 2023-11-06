import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { StyledCharacterDetail, DetailImgContainer, DetailWrapper, StyledImage, DetailTextContainer } from "../../styled-components/CharacterDetail";

const Detail = ({characters}) => {
  const [character, setCharacter] = useState({});
  const {id} = useParams();
  const apiKey='key=henrym-gabrieltomasi'
   useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
    <StyledCharacterDetail>
      <DetailWrapper>
      <DetailImgContainer>

    <StyledImage src={character.image && character.image} alt={character.name && character.name} />
      </DetailImgContainer>
      <DetailTextContainer>

    <h3>Name</h3> <span>{character.name && character.name}</span>
    <h3>Status</h3> <span>{character.status && character.status}</span>
    <h3>Species</h3> <span>{character.species && character.species}</span>
    <h3>Gender</h3> <span>{character.gender && character.gender}</span>
    <h3>Origin</h3> <span>{character.origin?.name && character.origin?.name}</span>
      </DetailTextContainer>
      </DetailWrapper>
    </StyledCharacterDetail>
  )
};
export default Detail;
