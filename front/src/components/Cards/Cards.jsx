import Card from "../Card/Card";
import { StyledCards } from "../../styled-components/CardsContainer";
const Cards = ({characters, onClose}) => {
   
   const element = characters?.map(({id,name,species,gender,image,status,origin})=>{
            return <Card
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
         })
   return (<StyledCards> {element} </StyledCards>)
};

export default Cards;
