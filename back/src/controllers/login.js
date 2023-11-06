const { User } = require("../DB_connection");

const login = async (req, res) => {

  const { email, password } = req.query;

  if (!email || !password) res.status(400).send("Something went wrong: data is missing");
  try {
    const log = await User.findOne({ where: { email: email } });
    console.log("log", log.password)
    if (!log) return res.status(403).send("Something went wrong: Email not found");
    if (log.password === !password) return res.status(403).send("Something went wrong: Unknown password");
    res.status(200).json({
      access: true,
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  login,
};
