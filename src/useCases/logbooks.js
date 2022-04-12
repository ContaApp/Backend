const Logbook = require('../models/logbooks')

function getAll () {
  return Logbook.find({}) // Devuelve una promesa, se recibe con async y await
}

function create (logbookData) {
  return Logbook.create(logbookData)
}

function getById (id) {
  return Logbook.findById(id)
}

function deleteById (id) {
  return Logbook.findByIdAndRemove(id)
}

function updateById (id, newLogbookData) {
  return Logbook.findByIdAndUpdate(id, newLogbookData, { new: true })
}

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById
}