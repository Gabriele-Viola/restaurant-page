const connection = require("../db/connection")

function indexSeat(req, res) {

    const sql = 'SELECT sale.id AS room_id,sale.nome_sala AS room_name, tavoli.id AS table_id, tavoli.posti AS seats, SUM(tavoli.posti) OVER (PARTITION BY sale.id) AS total_seats FROM project_returant.sale sale LEFT JOIN project_returant.tavoli tavoli ON tavoli.id_sala = sale.id '
    const sqlBookings = 'SELECT * FROM project_returant.prenotazioni'

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ message: 'Somthing went wrong' })
        const rooms = result.reduce((allRooms, index) => {

            const existingRoom = allRooms.find(room => room.room_id === index.room_id)

            if (existingRoom) {

                existingRoom.table.push({
                    table_id: index.table_id,
                    seats: index.seats,
                })
            } else {

                allRooms.push({
                    room_id: index.room_id,
                    room_name: index.room_name,
                    table: [{
                        table_id: index.table_id,
                        seats: index.seats,
                    }],
                    total_seats: index.total_seats,
                })
            }
            return allRooms
        }, [])
        connection.query(sqlBookings, (err, result) => {
            if (err) return res.status(500).json({ message: 'error on booking' })
            const bookings = result
            const roomsData = rooms.map(room => {

                const bookingsLunch = bookings.filter(booking => booking.sala == room.room_id).filter(booking => parseInt(booking.orario_prenotazione.split(':')[0], 10) <= 14).reduce((allSeat, booking) => allSeat + booking.posti, 0)
                const bookingsDinner = bookings.filter(booking => booking.sala == room.room_id).filter(booking => parseInt(booking.orario_prenotazione.split(':')[0], 10) >= 18).reduce((allSeat, booking) => allSeat + booking.posti, 0)

                const availableSeats = {
                    lunch: room.total_seats - bookingsLunch,
                    dinner: room.total_seats - bookingsDinner,
                }
                return {
                    ...room,
                    availableSeats,
                }
            })

            res.status(200).json({
                data: roomsData,
                count: roomsData.length
            })


        })


    })


}

module.exports = {
    indexSeat
}