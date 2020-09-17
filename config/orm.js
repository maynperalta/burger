const connection = require("./connection.js");


const DB = {
    create: (tableName, columns, values, cb) => {
        connection.query("INSERT into ?? (?, ?) VALUES (?, ?)", [tableName, ...columns, ...values], (err, data) => {
            if(err) throw err;
            cb(data);
        })

    },
    read: (tableName, cb) => {
        connection.query("SELECT * FROM ??", [tableName], (err, data) => {
            if(err) throw err;
            cb(data);
        })
    },
    update: () => {

    },
    delete: () => {

    }
}

module.exports = DB;