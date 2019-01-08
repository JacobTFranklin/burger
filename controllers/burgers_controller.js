var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(["id", "burger_name", "devoured"], function(data) {
      var hbObj = {burger: data};
      console.log(hbObj);
      res.render("index", hbObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(
    {burger_name : req.body.burger_name,
        devoured : req.body.devoured}
    , function(result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = {"id":req.params.id};
    console.log("condition", condition);
    console.log("Devoured", req.body.devoured);
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;