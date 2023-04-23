const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EnglishShsSchema = new Schema({
  subject: {
   type: String,
   required: true
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true
  }  
}, {timestamps:true} ) 

module.exports = mongoose.model('EnglishShs', EnglishShsSchema)