const jwt = require('jsonwebtoken')
const JWT_SECRET = 'SecretWord123'

function sign(){
    return jwt.sign(payload,JWT_SECRET ,{expieresIn: '7d'})
}

function verify(token){
    return jwt.verify(token, JWT_SECRET )
}

module.exports = {
    ...jwt,
    sign,
    verify
}