const express = require('express')
const router = express.Router()


// controller functions
const { signupUser, loginUser, getUsers, deleteUser, updateUser } = require('../controllers/userController')

// GET all users
router.get('/getUsers', getUsers)

// DELETE a user
router.delete('/:id', deleteUser)

// UPDATE a user
router.patch('/:id', updateUser)

//  login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router