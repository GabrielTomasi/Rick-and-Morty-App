const axios = require("axios");

const URL = "https://rym2-production.up.railway.app/api/character/";
const apiKey = "key=henrym-gabrieltomasi";
module.exports = getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}${id}?${apiKey}`)
    .then((response) => response.data)
    .then(({ name, image, gender, species, origin }) => {
      if (name) {
        let character = {
          id: id,
          name: name,
          gender: gender,
          species: species,
          origin: {
            name: origin.name,
            url: origin.url,
          },
          image: image,
        };

        res.status(200).json(character);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = getCharById;
