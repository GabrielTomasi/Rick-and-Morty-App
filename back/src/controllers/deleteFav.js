const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) res.status(400).send("no hay nada para eliminar");

    await Favorite.destroy({where:{id}});
    const allFav = await Favorite.findAll();
    res.status(200).json(allFav);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  deleteFav,
};
