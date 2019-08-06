var express = require("express");
var router = express.Router();


var burger = require("../config/orm");

router.get("/api/burg", function(req, res){
    burger.all("Burgers", function(data){
        console.log(data);
        res.json(data);
    })
})

router.post("/api/burg", function(req, res){
    burger.create(req.body.burger_name, function(response){
        console.log(response);
        res.status(201).json(response);
    })
})

router.put("/api/burg/:id", function(req, res){
    burger.update(req.params.id, function(response){
        console.log(response);
        res.status(200).json(response);
    })
})

router.get("/", function(req, res){
    burger.all("Burgers", function(data){
        var burgersObject = {
            burgers: data
        }
        res.render("index", burgersObject);
    })
})
module.exports = router;