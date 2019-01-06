var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cols, cb){
        orm.selectAll("burgers", cols, function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", cols, vals, function(res){
            cb(res);
        });
    }
};

module.exports = burger;