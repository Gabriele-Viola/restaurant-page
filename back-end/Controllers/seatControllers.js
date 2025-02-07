const connection = require("../db/connection")

function indexSeat(req, res) {
    const sqlTables = 'SELECT * FROM project_returant.tavoli'
    const sqlBooking = 'SELECT * FROM project_returant.prenotazioni'
    const sqlRooms = 'SELECT * FROM project_returant.sale'


    connection.query(sqlTables, (err, tavoli) => {
        if (err) return res.status(500).json({ message: 'Something went wrong to see table' })
        const tables = tavoli
        connection.query(sqlBooking, (err, prenotazioni) => {
            if (err) return res.status(500).json({ message: 'Somthing went wrong to see Bookings' })
            const bookings = prenotazioni
            connection.query(sqlRooms, (err, sale) => {
                if (err) return res.status(500).json({ message: 'Somthing went wrong to see rooms' })
                const rooms = sale
                const room = rooms.map(room => {
                    const table = tables.filter(table => table.id_sala == room.id)
                    const totalSeat = table.reduce((sum, table) => sum + table.posti, 0)

                    return {
                        ...room,
                        table,
                        totalSeat
                    }

                })
                res.status(200).json({
                    data: room,
                    count: room.length
                })

            })


        })
    })
}

module.exports = {
    indexSeat
}