const mongoose = require('mongoose')
const EnglishShs = require('../models/englishShsModel')

// GET all questions
const getQuestions = async (req, res) => {
  const questions = await EnglishShs.find({subject: "English Language"}).sort({year: "descending"})

  res.status(200).json(questions)
}

// GET a Single question
const getQuestion = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such question'})
  }

  const question = await EnglishShs.findById(id)

   if(!question) {
      return res.status(404).json({error: 'No such question'})
   }

   res.status(200).json(question)
}

module.exports = {
  getQuestions,
  getQuestion,
}