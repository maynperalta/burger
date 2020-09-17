const orm = require("../config/orm");

var burger = {
    getAll: (cb) => {
        orm.read("burgers", function (result) {
            cb(result)
        })
    }
}

module.exports = burger;