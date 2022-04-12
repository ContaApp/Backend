const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street:{ //nombre Calle
        type: String,
        required: true,
        inLength: 2,
        maxLength: 50,
    },
    apartHouseNumber:{ //número Interior
        type: String, //Se pone String Porque hay edificios donde es por ejemplo 5A
        required: false
    },
    houseNumber:{ //numero Exterior
        type: String,
        required: false
    },
    neighborhood:{ //colonia
        type: String,
        required: false,
        inLength: 2,
        maxLength: 50,
    },
    district:{ //Municipio o delegacion
        type: String,
        required: false,
        inLength: 2,
        maxLength: 50,
    },
    city:{
        type: String,
        required: true,
        inLength: 2,
        maxLength: 50,
    },
    state:{
        type: String,
        required: true,
        inLength: 2,
        maxLength: 30,
    },
    postalCode:{
        type: Number,
        required: true,
        inLength: 2,
        maxLength: 10,
    },
    
})

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        lowercase: true
    },
    surName:{
        type: String,
        required: true,
        minLength:3,
        maxLength: 50,
        lowercase: true
    },
    secondSurName:{
        type: String,
        required: false,
        minLength:3,
        maxLength: 50,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minLength:8,
        maxLength: 20,
        select: false //Para que cuando se haga un GET no envie la contraseña
    },
    email:{
        type: String,
        required: true,
        match: /.+@.+\..+/
    },
    rfc:{
        type: String,
        required: true,
        minLength: 8,
        maxLength:13
    },
    signUpDate:{
        type: Date,
        default: Date.now()
    },
    address:{addressSchema},
    avatar: String,
    logbooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'logblook' }]

})

const model = new mongoose.model('user', userSchema)

module.exports = model;