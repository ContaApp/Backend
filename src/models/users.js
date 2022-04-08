const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    nombre_calle:{
        type: String,
        required: true,
        inLength: 2,
        maxLength: 50,
    },
    num_interior:{
        type: String, //Se pone String Porque hay edificios donde es por ejemplo 5A
        required: false
    },
    num_exterior:{
        type: String,
        required: false
    },
    colonia:{
        type: String,
        required: false,
        inLength: 2,
        maxLength: 50,
    },
    municipio_delegacion:{
        type: String,
        required: false,
        inLength: 2,
        maxLength: 50,
    },
    ciudad:{
        type: String,
        required: true,
        inLength: 2,
        maxLength: 50,
    },
    estado:{
        type: String,
        required: true,
        inLength: 2,
        maxLength: 30,
    },
    codigo_postal:{
        type: Number,
        required: true,
        inLength: 2,
        maxLength: 10,
    },
    
})

const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        lowercase: true
    },
    ape_paterno:{
        type: String,
        required: true,
        minLength:3,
        maxLength: 50,
        lowercase: true
    },
    ape_materno:{
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
    fecha_registro:{
        type: Date,
        default: Date.now()
    },
    direccion:[addressSchema],
    logbooks: [{ type: Schema.Types.ObjectId, ref: 'logblook' }]



    /**
     * Preguntarle a Fer si estos pueden agregarse
     * 
     * 
     *  avatar: string,
        displayName: String,
        ultima_conexion: Date
     */
    








})

const model = new mongoose.Model('user', userSchema)

module.exports = model;