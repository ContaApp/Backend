const mongoose = require('mongoose');

const isrSchema= new mongoose.Schema({
    incomes:{ //Ingresos
        type: Number,
        required: true
    },
    expenses:{ //egresos
        type: Number,
        required: true
    },
    profit:{ //utilidad
        type: Number,
        required: true
    },
    fixRate:{ //cuota fija
        type: Number,
        required: true
    },
    itPercent:{ //isr porcentual
        type: Number,
        required: true
    },
    whitholdedIncomeTax:{ //isr retenido
        type: Number,
        required: true
    },
    itToPay:{ //isr a pagar
        type: Number ,
        required:true
    },

})

const ivaSchema= new mongoose.Schema({
    vatAP:{ //IVA a cargo
        type: Number,
        required: true
    },
    vatAR:{ //IVA a favor
        type: Number,
        required: true
    },
    vatWH:{
        type: Number,
        required: true
    },
    vatFAVOR:{
        type: Number,
        required: true
    },
    vat:{ //IVA Total
        type: Number,
        required: true
    }
})

const logbookSchema = new mongoose.Schema({
    year:{
        type: Number,
        required : true
    },
    month:{
        type: String,
        required : true
    },
    creationDate:{
        type: Date
    },
    isr:[isrSchema],
    iva:[ivaSchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }

})

const model = mongoose.model('logbook', logbookSchema)

module.exports= model;