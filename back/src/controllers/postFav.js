const { where } = require('sequelize');
const {Favorite} = require ('../DB_connection')

const postFav = async (req, res) =>{
    const {name, origin, status, image, species, gender} = req.body;
    console.log(req.body);
    if (!name || !origin || !status || !image || !species || !gender) res.status(401).send('Faltan datos')
try{
    await Favorite.findOrCreate({where:{
        name: name,
        origin: origin,
        status: status,
        image: image,
        species: species,
        gender: gender
    }})
   
    const allFav = await Favorite.findAll()
    res.status(200).json(allFav)

}
catch(error){
    res.status(500).send(error.mesage) 
}
}

module.exports = {
    postFav
}