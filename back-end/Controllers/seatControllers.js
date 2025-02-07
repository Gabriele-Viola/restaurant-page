const connection = require("../db/connection")

function indexSeat(req, res) {
    const sqlTables = 'SELECT * FROM project_returant.tavoli'
    const sqlBooking = 'SELECT * FROM project_returant.prenotazioni'
    const sqlRooms = 'SELECT * FROM project_returant.sale'

    const sql = 'SELECT sale.id AS room_id,sale.nome_sala AS room_name, tavoli.id AS table_id, tavoli.posti AS seats, SUM(tavoli.posti) OVER (PARTITION BY sale.id) AS total_seats FROM project_returant.sale sale LEFT JOIN project_returant.tavoli tavoli ON tavoli.id_sala = sale.id '

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
        res.status(200).json({
            data: rooms,
            count: rooms.length
        })


    })


}

module.exports = {
    indexSeat
}