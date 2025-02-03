const express = require('express')
const connection = require('./db/connection')
const app = express()
const { index } = require('./menuControllers/menuControllers')
const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(express.static('public'))
app.use(express.json())

app.get('/motherEarthRestaurant/menu', index)

app.listen(PORT, () => {
    console.log(`Server start on port ${HOST}:${PORT}`)
})