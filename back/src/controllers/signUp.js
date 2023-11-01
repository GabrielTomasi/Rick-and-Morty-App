const { User } = require("../DB_connection.js");

const signUp = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, confirm_password } = req.body;
    if (!email || !password || !confirm_password)
      res.status(400).send("Please check missing fields");
    if (password !== confirm_password)
      res.status(400).send("Passwords do not match");
    const userExist = await User.findOne({ where: { email: email } });
    console.log("user finded", userExist);
    if (userExist) res.status(400).send("User already exists");
    else {
      const newUser = await User.create({
        email: email,
        password: password,
      });
      console.log(newUser.dataValues);
      if (newUser) res.status(200).json({ create: true });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  signUp,
};
