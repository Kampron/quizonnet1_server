const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ResultsSchema = new Schema({
  username: {
   type: String,
   required: true
  },
  result: {
   type: Array
  },
  length: {
    type: Number
  },
  attempts: {
    type: Number
  },
  points: {
    type: Number
  },
  achieved: {
    type: String
  },
   createdAt : {
    type : Date, default : Date.now
   } 
}, {timestamps:true} ) 

module.exports = mongoose.model('Results', ResultsSchema)