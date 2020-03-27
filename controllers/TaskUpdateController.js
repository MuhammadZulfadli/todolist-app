const mysql = require('../database')


module.exports = (req, res) => { 

const sql = 'UPDATE kegiatan SET name = ? WHERE id = ?'
const values = [req.body.name, req.params.id,]

mysql.query(sql, values, (err, results, fields) => {
    if (err) throw err

    res.json(results)
})

}

