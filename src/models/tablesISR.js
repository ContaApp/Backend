const mongoose = require('mongoose')

const metaDataSchema = new mongoose.Schema({
    lowerLimit:{ //limite inferior
        type: Number,
        required: true,
        trim: true
    },
    upperLimit:{ //limite superior
        type: Number,
        required: false,
        trim: true
    },
    fixedRate:{ //Cuotafija
        type: Number,
        required: true,
        trim: true
    },
    perCentAboveLowerLimit:{ // % sobre excedente del limite inferior
        type: Number,
        required: true,
        trim: true
    },

})
const tableISRSchema = new mongoose.Schema({
    month:{
       type:String,
       required:true,
       lowercase:true 
    },
    year:{
        type:Number,
        required:true,
        lowercase:true 
    },
    metadata:[metaDataSchema]
        
    
})

const model = mongoose.model('tableISR', tableISRSchema)

module.exports= model;