const mysql = require('../database')


module.exports = (req, res) => { 

const sql = 'INSERT INTO kegiatan VALUES (?, ? )'
const values = [null, req.body.name]

mysql.query(sql, values, (err, results, fields) => {
    if (err) throw err

    res.json(results)
})

}

