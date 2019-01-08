var connection = require("./connection.js");

var orm = {
    selectAll: function(cols, table, cb){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [cols, table], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
          });
    },
    insertOne: function(table, objColVals, cb){
        var queryString = "INSERT INTO ?? VALUES (?,?,?)";
        connection.query(queryString, [table, null, objColVals.burger_name, objColVals.devoured], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
          });
    },
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVals, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
