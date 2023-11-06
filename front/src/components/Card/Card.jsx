import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import {
  StyledCardContainer,
  Wrapper,
  StyledImg,
  ImgContainer,
  ButtonContainer
} from "../../styled-components/CharacterCard";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  myFavorites,
  addFav,
  removeFav,
}) {
  const [isFav, setIsFav] = useState(false);
  const [char, setChar] = useState({
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
  });
  const location = useLocation();
  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(char);

    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <StyledCardContainer>
      <Wrapper>
        <ButtonContainer>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          {location.pathname === "/home" && (
            <button onClick={() => onClose(id)}> X </button>
          )}
        </ButtonContainer>
        <div>
          <h2>{id}</h2>
          <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>{" "}
          </Link>
        </div>
        <ImgContainer>
          <StyledImg src={image} alt={name} />
        </ImgContainer>
        <div>
          <h2>Gender: {gender}</h2>
        </div>
      </Wrapper>
    </StyledCardContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
