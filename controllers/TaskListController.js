const mysql = require('../database')


module.exports = (req, res) => { 

mysql.query('SELECT * FROM kegiatan', [], (err, results, fields) => {
    if (err) throw err

    res.json(results)
})

}

