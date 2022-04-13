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

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById
}