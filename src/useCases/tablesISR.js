const TableISR = require('../models/tablesISR')

function getAll () {
  return TableISR.find({}) // Devuelve una promesa, se recibe con async y await
}

function create (tableISRData) {
  return TableISR.create(tableISRData)
}

function getById (id) {
  return TableISR.findById(id)
}

function deleteById (id) {
  return TableISR.findByIdAndRemove(id)
}

function updateById (id, newTableISRData) {
  return TableISR.findByIdAndUpdate(id, newTableISRData, { new: true })
}

//Buscar Rango 

/* async function searchMonthYear(month, year ){
  const consulta = await TableISR.find({"month": month, "year": year})
  console.log('Tipo de dato de consulta: ',consulta.typeof)
  //console.log('Ingresando a metadata:',consulta[0].metadata);

  const ArrayMetaData = await consulta[0].metadata;
  console.log('Arreglo en variable ArrayMetaData:', ArrayMetaData, )

  // Filter a ArrayMetaData
  const limite = ArrayMetaData.filter((renglon)=> renglon.lowerLimit === 0.01)
  console.log("Filter: ",limite)

  return limite;
} */

async function searchRange(month, year, money ){
  const myQuery = await TableISR.find({"month": month, "year": year})
  //console.log('Tipo de dato de consulta: ',consulta.typeof)
  //console.log('Ingresando a metadata:',consulta[0].metadata);

  const ArrayMetaData = await myQuery[0].metadata;
  console.log('Arreglo en variable ArrayMetaData:', ArrayMetaData )

  // Filter a ArrayMetaData
  const limitRange = ArrayMetaData.filter((subdocumentRange)=> ((subdocumentRange.upperLimit >= money || (!subdocumentRange.upperLimit)) && subdocumentRange.lowerLimit <= money))
  console.log("Filter: ",limitRange)
  

  return limitRange;
}

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById,
  //searchMonthYear
  searchRange
}