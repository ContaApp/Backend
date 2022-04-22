const express = require('express')
const auth = require('../middlewares/auth')

const users = require('../useCases/users')




const router = express.Router()




// GET /users/
router.get('/',  auth,  (request, response, next) => {
  next()
}, async (req, res) => {
  try {
    const allUsers= await users.getAll()
    res.json({
      success : true,
      message: 'All Users',
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at get all Users', 
      error: error.message
    })
  }
})


//GET :id
router.get('/:id',  auth, (req, res, next) => {
  next()
},async (req, res) => {
  try {
    const { id } = req.params
    const user = await users.getById(id)
    res.json({
      success: true,
      message: 'Get a user',
      data: {
        user
      }
    })
  } catch (error) {
  
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
}) 


// POST /


// DELETE /users/:id

router.delete('/:id',auth, (req, res, next) => {
  next()
},async (req, res) => {
  try {
    const { id } = req.params
    const userDeleted = await users.deleteById(id)
    res.json({
      success: true,
      message: `User with id ${id} Deleted`,
      data: {
        user: userDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})


// PATCH /users/:id
router.patch('/:id',auth, (req, res, next) => {
  next()
}, async (req, res) => {
  try {
    const { id } = req.params
    const userUpdated = await users.updateById(id, req.body)
    res.json({
      success: true,
      message: `User with id ${id} updated`,
      data: {
        user: userUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})



// signup --> registro
// signin --> login
router.post('/signup', async (req, res) => {
  try {
    const userData = req.body
    const userCreated = await users.signUp(userData)
    res.json({
      success: true,
      message: 'User registered 🎉 ',
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Could no register 😧 ',
      error: error.message
    })
  }
}) 



router.post('/login', async (req, res) => {
  try {
    const { email, password} = req.body
    const token = await users.login(email, password)
    res.json({
      success: true,
      message: 'User logged In 🎉 ',
      data: {
        token
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Could not register',
      error: error.message
    })
  }
}) 
module.exports = router