const getCharById = require("../controllers/getCharById");
const {deleteFav} = require("../controllers/handleFavorites");
const {postFav} = require("../controllers/handleFavorites");
const { login } = require("../controllers/login");
const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login", (req, res) => {
  login(req, res);
});

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  console.log(req);
 deleteFav(req, res);
});

module.exports = router;
