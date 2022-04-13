const express = require('express')
const tablesISR = require('../useCases/tablesISR')
//const auth = require('../middlewares/auth')


const router = express.Router()
//router.use(auth)


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

module.exports = router