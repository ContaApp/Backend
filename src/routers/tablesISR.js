const express = require('express')
const tablesISR = require('../useCases/tablesISR')



const router = express.Router()



//GET 
router.get('/', async (req, res) => {
  try {
    const alltablesISR = await tablesISR.getAll()
    res.json({
      success: true,
      message: 'All tablesISR 🧾 ',
      data: {
         alltablesISR
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at get tablesISR 🚩',
      error: error.message
    })
  }
})

//Get :id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const tableISR = await tablesISR.getById(id)
    res.json({
      success: true,
      message: 'Get a tableISR 📊 ',
      data: {
        tableISR
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at get tableISR 🚩',
      error: error.message
    })
  }
})


// Post
router.post('/', async (req, res) => {
  try {
    const tableISRCreated = await tablesISR.create(req.body)
    res.json({
      message: 'tableISR Created 👌 ',
      data: {
        tableISRCreated 
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at create tableISR  🚩',
      error: error.message
    })
  }
})

//Delete :id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const tableISRDeleted = await tablesISR.deleteById(id)
    res.json({
      success: true,
      message: `tableISR with id ${id} deleted 🗑`,
      data: {
        tableISR: tableISRDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at delete tableISR 🚩',
      error: error.message
    })
  }
})

//Patch :id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const tableISRUpdated = await tablesISR.updateById(id, req.body)
    res.json({
      success: true,
      message: `tableISR with id ${id} updated 🧮`,
      data: {
        tableISR: tableISRUpdated
      }
    })
  } catch (error) {
   
    res.status(400)
    res.json({
      success: false,
      message: 'Error at update tableISR 🚩',
      error: error.message
    })
  }
})


/* router.post('/search-month-year', async (req, res) => {
  try {
    const {month, year} = req.body
    const dataFound = await tablesISR.searchMonthYear(month, year)

    res.json({
      success: true,
      message: ' 🎉 ',
      data: {
        dataFound
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Could not get data',
      error: error.message
    })
  }
})  */


router.post('/search-range', async (req, res) => {
  try {
    const {month, year, money} = req.body
    const dataFound = await tablesISR.searchRange(month, year, money)

    res.json({
      success: true,
      message: ' 🎉 ',
      data: {
        dataFound
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Could not get data',
      error: error.message
    })
  }
}) 

module.exports = router