
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')


const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}


// GET all users
const getUsers = async (req, res) =>{
   const users = await User.find({}).sort({createdAt: -1}) 

   res.status(200).json(users)
}

// DELETE a user
const deleteUser = async (req, res) => {
   const { id } = req.params

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such user'})
   }

   const user = await User.findOneAndDelete({_id: id})

   if(!user) {
      return res.status(404).json({error: "No such user"})
   }

   res.status(200).json(user)
}



// UPDATE a user
const updateUser = async (req, res) => {
   const { id } = req.params

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such user'})
   }

   const user = await User.findOneAndUpdate({_id: id}, {
      ...req.body
   })

   if (!user) {
      return res.status(400).json({error: 'no such user'})
   }

   res.status(200).json(user)
}



// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
       const user = await User.login( email, password)

    //create a token
    const token = createToken(user._id)
       
       res.status(200).json({user, token})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


// signup  user
const signupUser = async (req, res) => {
    const {username, email, password} = req.body

    try {
       const user = await User.signup(username, email, password)

    //create a token
    const token = createToken(user._id)
       
       res.status(200).json({user, token})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {signupUser, loginUser , getUsers, deleteUser, updateUser}