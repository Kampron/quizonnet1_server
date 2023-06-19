require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const englishShs = require('./routes/englishShsRoutes')
const result = require('./routes/resultRoutes')


// express app
const app = express()


app.set("view engine","ejs");
// middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/quizonnet/user', userRoutes)
app.use('/quizonnet/questions', englishShs)
app.use('/quizonnet/results', result)

// connet to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
















