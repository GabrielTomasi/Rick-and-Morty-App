const Favorite = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    console.log(req.body);
    if (!id || !name || !origin || !status || !image || !species || !gender)
      res.status(401).send("Faltan datos");
    else {
      const fav = await Favorite.build({
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
      console.log(fav);
      Favorite.save(fav);
      const allFav = await Favorite.findAll();
      if (!allFav) res.status(400).send("no hay favoritos");
      return res.status(200).json(allFav);
    }
  } catch (error) {
    res.status(500).json(error.mesage);
  }
};
