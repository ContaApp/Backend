const User = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll () {
    return User.find({})
}


function create (UserData) {
    return User.create(UserData)
  }

  function deleteById (id) {
    return User.findByIdAndRemove(id)
  }
  
  function updateById (id, newUserData) {
    return User.findByIdAndUpdate(id, newUserData, { new: true })
  }

  function getById (id) {
    return User.findById(id)
  }

async function signUp (dataUser) {
    // name, email, password
    // valudar que no exista un usuario con el email
    const {email, password} = dataUser

    const userFound = await User.findOne({email}) //objeto {name, password, email}
    // si no lo encuentra regresa un undefined

    if(userFound) throw new Error('User already exists')

    // encriptar mi constraseña
    const passwordEncrypted = await bcrypt.hash(password)

    return User.create({ email, password: passwordEncrypted})
}

async function login (email, password) {

    const userFound = await User.findOne({email})
  //si no encuentra el email manda un error
    if(!userFound) throw new Error('Invalid credentials')

    //valida si la contraseña ingresada es igual a la contraseña de la BD

    const isValidPassword = await bcrypt.compare(password, userFound.password)

    if(!isValidPassword) throw new Error('Invalid credentials')

    // regresar el token
    return jwt.sign({id: userFound._id})
}


module.exports = {
    getAll,
    create,
    deleteById,
    updateById,
    getById,
    signUp,
    login
}