//MySQL connection import.
const connection = require("./connection.js");

//Helper function for SQL syntax replaces the question marks in below functions changing them from arrays to strings.
function printQuestionMarks(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};
//Helper function to convert object keys and values into MySQL syntax.
function objToSql(ob) {
    var arr = [];
//Loop through keys and push as a string into array.
    for (var key in ob) {
        var value = ob[key];
//Check for hidden properties to skip.
        if (Object.hasOwnProperty.call(ob, key)) {
//Add quotation marks if a string has spaces.
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
//Takes an array of strings and converts to a single string separated by commas.
    return arr.toString();
}
//MySQL statement functions object.
const DB = {
    insertOne: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";
        connection.query(queryString, vals, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    selectAll: (tableInput, cb) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    delete: (table, condition, cb) => {
        var queryString = "DELETE FROM " + table + " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = DB;