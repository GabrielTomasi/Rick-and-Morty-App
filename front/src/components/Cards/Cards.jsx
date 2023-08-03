import Card from "../Card/Card";
import style from './Cards.module.css';
const Cards = ({characters, onClose}) => {
   console.log(characters);
   const element = characters.map(({id,name,species,gender,image,status,origin})=>{
            return <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin.name}
            onClose={() => onClose(id)}
            />
         })
   return (<div className={style.div}> {element} </div>)
};

export default Cards;
