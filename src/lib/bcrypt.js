const bcrypt = require('bcrypt');

const saltRounds = 10;

function hash(){
    return bcrypt.hash(planText, saltRounds)
}

module.exports = {
    ...bcrypt,
    hash
}