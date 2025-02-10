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

                const availableSeats = {
                    lunch: room.total_seats - countBookingsSeat(bookingsLunch(bookings, room)),
                    dinner: room.total_seats - countBookingsSeat(bookingsDinner(bookings, room)),
                }

                function bookingsLunch(booking, room) {
                    const bookingsLunch = bookings.filter(booking => booking.sala == room.room_id).filter(booking => parseInt(booking.orario_prenotazione.split(':')[0], 10) <= 14)
                    return bookingsLunch
                }

                function bookingsDinner(booking, room) {
                    const bookingsDinner = bookings.filter(booking => booking.sala == room.room_id).filter(booking => parseInt(booking.orario_prenotazione.split(':')[0], 10) >= 18)
                    return bookingsDinner

                }

                function countBookingsSeat(bookings) {
                    const count = bookings.reduce((allSeat, booking) => allSeat + booking.posti, 0)
                    return count
                }


                return {
                    ...room,
                    availableSeats,
                }
            })
            let firstTables = [...roomsData[0].table]

            const firstFind = firstTables.find(table => table.seats <= bookings[0].posti)
            const tavolidisponibilissimi = bookings.map(booking => {
                if (booking.posti <= 2) {
                    const tavoloTrovato = firstTables.find(table => table.seats <= booking.posti)
                    firstTables = firstTables.filter(table => table.table_id !== tavoloTrovato.table_id)
                    return firstTables

                } else if (booking.posti <= 4) {
                    const tavoloTrovato = firstTables.find(table => table.seats <= booking.posti)
                    firstTables = firstTables.filter(table => table.table_id !== tavoloTrovato.table_id)
                    return firstTables
                } else if (booking.posti <= 6) {
                    const tavoloTrovato = firstTables.find(table => table.seats <= booking.posti)
                    firstTables = firstTables.filter(table => table.table_id !== tavoloTrovato.table_id)
                    return firstTables
                } else {
                    let rest = booking.posti - 6
                    const tavoloTrovatoOver = firstTables.find(table => table.seats == 6)
                    console.log('oltre il 6:', tavoloTrovatoOver);

                    firstTables = firstTables.filter(table => table.table_id !== tavoloTrovatoOver.table_id)
                    console.log('questo è il resto:', rest);
                    if (rest <= 2) {
                        const tavoloTrovato = firstTables.find(table => table.seats <= booking.posti)
                        firstTables = firstTables.filter(table => table.table_id !== tavoloTrovato.table_id)
                        return firstTables
                    } else if (booking.posti <= 4) {
                        const tavoloTrovato = firstTables.find(table => table.seats <= booking.posti)
                        firstTables = firstTables.filter(table => table.table_id !== tavoloTrovato.table_id)
                        return firstTables
                    } else if (booking.posti <= 6) {
                        const tavoloTrovato = firstTables.find(table => table.seats <= booking.posti)
                        firstTables = firstTables.filter(table => table.table_id !== tavoloTrovato.table_id)
                        return firstTables
                    }


                    return {
                        message: 'error',
                    }
                }
            })
            console.log('firstTable:', tavolidisponibilissimi);

            let tavolidisonibili = firstTables.filter(table => table.table_id !== firstFind.table_id)
            console.log('disponibili', tavolidisonibili, 'tutti', roomsData[0].table);


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