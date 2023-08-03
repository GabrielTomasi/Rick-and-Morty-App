import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import {filterCards, orderCards} from '../../redux/actions'
import { useState } from "react";


const Favorites = ({myFavorites, onCloseFav})=>{
    console.log(myFavorites);
    const [aux, setAux]=useState(false)

    const element = myFavorites.map(({id,name,species,gender,image,status,origin})=>{
        return <Card
        key={id}
        id={id}
        name={name}
        species={species}
        gender={gender}
        image={image}
        status={status}
        origin={origin.name}
        onClose={() => onCloseFav(id)}
        />
     })
     const dispatch = useDispatch()
     const handleOrder = (event)=>{
        setAux(!aux)
        dispatch(orderCards(event.target.value))
     }
     const handlerFilter = (event)=>{
        dispatch(filterCards(event.target.value))
     }

return <div> 
    <select onChange={handleOrder}>
    <option value="A">Ascendente</option>
    <option value="D">Desendente</option>
    </select>
    <select onChange={handlerFilter}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>
    <option value="All">All</option>
    </select>
    {element} 
    </div>

}

const mapStateToProps = (state)=>{
return {
    myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps, null)(Favorites)