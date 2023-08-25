const {User} = require ('../DB_connection')

const postUser = async (req, res) =>{
    const {email, password} = req.body;

    if(!email && !password) res.status(400).send('faltan datos');
try {
    console.log(User);
    await User.findOrCreate({where: {email: email, password: password} })

    res.status(200).json('Usuario creado con exito')
    
} catch (error) {
    res.status(500).send(error.message);
}
}

module.exports = {
    postUser
}
