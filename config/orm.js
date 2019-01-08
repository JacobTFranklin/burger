var connection = require("./connection.js");

//Converts object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        };
        arr.push(key + "=" + value);
      };
    };
    return arr.toString();
};

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
