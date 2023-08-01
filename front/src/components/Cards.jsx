import Card from "./Card";

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
   return (<div> {element} </div>)
};

export default Cards;
