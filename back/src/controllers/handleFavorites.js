let myFavorites =[];

const postFav = (req, res)=>{
 myFavorites.push(req.body)
 return res.status(200).json(myFavorites)
}

const deleteFav = (req, res)=>{
    console.log(req.params);
    const {id}=req.params;
    myFavorites=myFavorites.filter((favorite)=> favorite.id !== id)
    return res.status(200).send(myFavorites)
}

module.exports ={
    postFav,
    deleteFav
}