const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) res.status(400).send("faltan datos");
  try {
    const log = await User.findOne({ where: { email: email } });
    if (!log) res.status(403).send("direccion incorrecta");
    if (log.password === !password) res.status(403).send("password incorrecta");
    res.status(200).json({
      access: true,
    });
  } catch (error) {
    res.status(500).json(error.message)
  }
};

module.exports = {
  login,
};
