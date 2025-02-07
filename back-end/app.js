const express = require('express')
const connection = require('./db/connection')
const app = express()
const cors = require('cors')
const { index } = require('./Controllers/menuControllers')
const { indexRooms, indexSeat } = require('./Controllers/seatControllers')
const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.get('/motherEarthRestaurant/menu', index)
app.get('/motherEarthRestaurant/booking', indexSeat)


app.listen(PORT, () => {
    console.log(`Server start on port ${HOST}:${PORT}`)
})