const express = require('express')

const {
    getResult,
    storeResult,
} = require('../controllers/resutlsController')

const router = express.Router()

/** get all results */
router.get('/shs/english', getResult)

/** store results */
router.post('/shs/english', storeResult)

module.exports = router