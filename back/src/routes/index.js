const getCharById = require("../controllers/getCharById");
const {deleteFav} = require('../controllers/deleteFav')
const {login} = require('../controllers/login')
const {postUser} = require('../controllers/postUser')
const {postFav} = require ('../controllers/postFav')

const router = require("express").Router();

router.get("/character/:id", async(req, res) => {
 await getCharById(req, res);
});

router.post('/login', async(req,res) =>{
  await postUser(req, res)
})

router.get("/login", async(req, res) => {
  await login(req, res);
});

router.post("/fav", async(req, res) => {
  await postFav(req, res);
});

router.delete("/fav/:id", async(req, res) => {
  await deleteFav(req, res);
});

module.exports = router;
