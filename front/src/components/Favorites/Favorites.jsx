import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "../Favorites/Favorites.module.css";
import { StyledCards } from "../../styled-components/CardsContainer";
import { StyledConteiner } from "../../styled-components/Favorites";

const Favorites = ({ myFavorites, onClose }) => {
  const [aux, setAux] = useState(false);
  const [checkbox, setCheckbox] = useState({
    A: false,
    D: false,
  });
  const element = myFavorites.map(
    ({ id, name, species, gender, image, status, origin }) => {
      return (
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          status={status}
          origin={origin.name}
          onClose={onClose}
        />
      );
    }
  );
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setCheckbox({
      [name]: value,
    });
    if(checkbox.A) dispatch(orderCards("A"));
    if(checkbox.D) dispatch(orderCards("D"));
  };
  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  console.log(checkbox)
  return (
    <>
      <nav>
        <div>
          <label>
            upward
            <input  type="checkbox" name="A" checked={checkbox.A} onChange={handleOrder}/>
          </label>
        </div>
        <div>
          <label>
            downward
            <input type="checkbox" name="D" checked={checkbox.D} onChange={handleOrder}/>
          </label>
        </div>

        <select onChange={handlerFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          <option value="All">All</option>
        </select>

      </nav>
      <StyledCards>{element}</StyledCards>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
