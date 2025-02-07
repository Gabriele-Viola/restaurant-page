const connection = require("../db/connection")

function index(req, res) {
    const sql = 'SELECT * FROM project_returant.menu'
    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ message: 'Something went wrong to see menù' })
        res.status(200).json({
            data: result,
            count: result.length
        })
    })
}



module.exports = {
    index
}