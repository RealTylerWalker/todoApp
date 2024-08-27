// todoApp Server

const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')

// middleware
app.use(express.json())
app.use(morgan('dev'))

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
}

connectToDb()

// routes 
app.use('/api/todo', require('./routes/todoRouter.js'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: 'err.message'})
})


app.listen(8000, () => console.log(`Server started on port 8000`))
