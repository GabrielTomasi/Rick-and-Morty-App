const axios = require("axios");
require("dotenv").config()

module.exports = getCharById = async (req, res) => {
  const {URL} = process.env
  const { id } = req.params;
  try {
    if(!id) res.status(404).json({message: "Falta id"})
    const response = await axios.get(`${URL}/${id}`);
    const { name, image, gender, species, origin, status } = response.data;
    if (name) {
      
      let character = {
        id: +id,
        name: name,
        gender: gender,
        species: species,
        origin: {
          name: origin.name,
          url: origin.url,
        },
        image: image,
        status: status
      };

      res.status(200).json(character);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getCharById;


