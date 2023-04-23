const mongoose = require('mongoose')
const Results = require('../models/resultModel')


/** get all result */
const getResult = async (req, res) => {
    const r = await Results.find()
  res.status(200).json(r)
}

/** post all result */
const storeResult = async (req, res) => {
    const {username, result, attempts, points, length, achieved} = req.body 

    try {
      if(!username && !result) throw new Error('Data Not Provided...!')
       Results.create({username, result, attempts, points, length, achieved})
       
       res.status(200).json({msg : "Result saved successfully"})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}
 
module.exports = {
  getResult,
  storeResult,
}