
const express = require('express')
const router = express.Router()

//GET 
router.get('/', (req, res) => {
    try {
      res.json(
        {
            project: "tuContApp",
            version: "1.0.0",
            developers: [
              "Aldahir Mayorga",
              "Paco Torres",
              "Erick Palma"
            ]
         })
    } catch (error) {
      res.status(400)
      res.json({
        success: false,
        message: 'Error ',
        error: error.message
      })
    }
  })

  module.exports = router