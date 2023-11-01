const getCharById = require("../controllers/getCharById.js");
const { deleteFav } = require("../controllers/deleteFav.js");
const { login } = require("../controllers/login.js");
const { postUser } = require("../controllers/postUser.js");
const { postFav } = require("../controllers/postFav.js");
const { signUp } = require("../controllers/signUp.js");
const router = require("express").Router();

router.get("/character/:id", async (req, res) => {
  await getCharById(req, res);
});

router.post("/login", async (req, res) => {
  await postUser(req, res);
});

router.get("/login", async (req, res) => {
  await login(req, res);
});

router.post("/fav", async (req, res) => {
  await postFav(req, res);
});

router.delete("/fav/:id", async (req, res) => {
  await deleteFav(req, res);
});

router.post("/signup", async (req, res) => {
  await signUp(req, res);
});
module.exports = router;
