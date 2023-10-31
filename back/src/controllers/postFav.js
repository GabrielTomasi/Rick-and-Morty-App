const { Favorite } = require("../DB_connection.js");

module.exports = postFav = async (req, res) => {
  try {

    const { id, name, origin, status, image, species, gender } = req.body;
    if (!id || !name || !origin || !status || !image || !species || !gender)
      res.status(401).send("Faltan datos");
    else {
      const fav = await Favorite.findOrCreate({
        where: {
          id: id,
          name: name,
          origin: origin,
          status: status,
          image: image,
          species: species,
          gender: gender,
        },
      });
      if (!fav) res.status(501).json({message: "no se pudo agregar a favoritos"})
      console.log(fav);
      const allFav = await Favorite.findAll();
      console.log(allFav);
      if (!allFav) res.status(400).send("no hay favoritos");
      return res.status(200).json(allFav);
    }
  } catch (error) {
    res.status(500).json(error.mesage);
  }
};

module.exports = {
  postFav
}