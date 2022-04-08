const mongoose = require('mongoose')
 require('mongoose-double') (mongoose);

 const SchemaTypes = mongoose.Schema.Types;


const isrSchema= new mongoose.Schema({
    ventas:{
        type: SchemaTypes.Double,
        required: true
    },
    otros_ingresos:{
        type: SchemaTypes.Double,
        required: false
    },
    total_ingresos:{
        type: SchemaTypes.Double,
        required: true
    },
    utilidad:{
        type: SchemaTypes.Double,
        required: true
    },
    cuota_fija:{
        type: SchemaTypes.Double,
        required: true
    },
    isr_porcentual:{
        type: SchemaTypes.Double,
        required: true
    },
    isr_retenido:{
        type: SchemaTypes.Double,
        required: true
    },
    isr_a_pagar:{
        type: SchemaTypes.Double 
    },

})

const ivaSchema= new mongoose.Schema({
    iva_favor:{
        type: SchemaTypes.Double,
        required: true
    },
    iva_a_cargo:{
        type: SchemaTypes.Double,
        required: true
    },
    total_iva:{
        type: SchemaTypes.Double,
    }
})

const logbookSchema = new mongoose.Schema({
    anio:{
        type: Number,
        required : true
    },
    mes:{
        type: String,
        required : true
    },
    fecha_elaboracion:{
        type: Date
    },
    isr:[isrSchema],
    iva:[ivaSchema],
    users: [{ type: Schema.Types.ObjectId, ref: 'user' }]

})

const model = mongoose.model('logblook', logblookSchema)

module.exports= model;