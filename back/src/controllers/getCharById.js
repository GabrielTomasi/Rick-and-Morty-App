const axios = require("axios");

const URL = "https://rym2-production.up.railway.app/api/character/";
const apiKey = "key=henrym-gabrieltomasi";
module.exports = getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}${id}?${apiKey}`);
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


