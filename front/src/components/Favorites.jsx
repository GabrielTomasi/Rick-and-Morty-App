import { connect } from "react-redux";


const Favorites = ({myfavorites})=>{
    const element = myfavorites.map(({id,name,species,gender,image,status,origin})=>{
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

}

const mapStateToProps = (state)=>{
return state.myfavorites;
}

export default connect(mapStateToProps, null)(Favorites)