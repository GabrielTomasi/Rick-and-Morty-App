import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = (
  { id, name, status, species, gender, origin, image, onClose, myFavorites },
  { fav, remFav }
) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (event) => {
    if (isFav) {
      setIsFav(false);
      remFav(id);
    } else {
      setIsFav(true);
      fav(id, name, status, species, gender, origin, image);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { fav: () => dispatch(addFav()), remFav: () => dispatch(removeFav()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
