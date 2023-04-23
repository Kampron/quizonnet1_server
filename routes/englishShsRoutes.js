const express = require('express')
const {
    getQuestions,
    getQuestion,
} =  require('../controllers/englishShsController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// Get all quetions
router.get('/shs/english', getQuestions)

// Get a single question
router.get('/shs/english/:id', getQuestion)

module.exports = router