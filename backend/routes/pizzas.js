const express = require("express");
const { GET } = require("../../data");

const router = express.Router();

/* GET pizzas listing. */
router.get("/", function ( req, res, next ) {
    const pizzas = GET("pizzas");

    const data = {
        pizzas,
        count: pizzas.length,
    };

    res.json({ data });
});

module.exports = router;
