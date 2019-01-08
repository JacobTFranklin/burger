var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cols, cb){
        orm.selectAll(cols, "burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(objColVals, cb){
        orm.insertOne("burgers", objColVals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;