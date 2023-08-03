import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import style from "../Card/Card.module.css";

const Card = ({
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
}) => {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = (event) => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });

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
    <div className={style.div}>
      {isFav ? (
        <button className={style.btn2}onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.btn2}onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.btn} onClick={() => onClose(id)}> X </button>
      <h2 className={style.data}>{id}</h2>
      <img className={style.image} src={image} alt={name} />
      
      <Link to={`/detail/${id}`}>
      <h2 className={style.name} >Name: {name}</h2>{" "}
      </Link>
      <div className={style.data}>
      <h2>Gender: {gender}</h2>
      </div>
    </div>
  );
};

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
