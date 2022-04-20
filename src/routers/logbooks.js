const express = require('express')
const logbooks = require('../useCases/logbooks')
const auth = require('../middlewares/auth')


const router = express.Router()
router.use(auth)


//GET 
router.get('/', async (req, res) => {
  try {
    const allLogbooks = await logbooks.getAll()
    res.json({
      success: true,
      message: 'All logbooks 📚 ',
      data: {
        logbooks: allLogbooks
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at get logbooks',
      error: error.message
    })
  }
})

//Get :id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const logbook = await logbooks.getById(id)
    res.json({
      success: true,
      message: 'Get a logbook 📊 ',
      data: {
        logbook
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at get logbooks',
      error: error.message
    })
  }
})


// Post
router.post('/', async (req, res) => {
  try {
    const logbookCreated = await logbooks.create(req.body)
    res.json({
      message: 'Logbook Created 👌 ',
      data: {
        logbook: logbookCreated 
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at create logbook ',
      error: error.message
    })
  }
})

//Delete :id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const logbookDeleted = await logbooks.deleteById(id)
    res.json({
      success: true,
      message: `Logbook with id ${id} deleted`,
      data: {
        logbook: logbookDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at delete logbook',
      error: error.message
    })
  }
})

//Patch :id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const logbookUpdated = await logbooks.updateById(id, req.body)
    res.json({
      success: true,
      message: `Logbook with id ${id} updated`,
      data: {
        logbook: logbookUpdated
      }
    })
  } catch (error) {
   
    res.status(400)
    res.json({
      success: false,
      message: 'Error at update logbook',
      error: error.message
    })
  }
})

module.exports = router