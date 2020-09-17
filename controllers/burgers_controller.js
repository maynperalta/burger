const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.getAll(function(result) {
        res.json(result);
    })
})

module.exports = router;