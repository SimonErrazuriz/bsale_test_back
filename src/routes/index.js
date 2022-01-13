/* Rutas principales */
const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get(`/productos/:buscar`, async (req, res) => {
    if (req.params.buscar === 'null') {
        const productos = await pool.query(`SELECT * FROM product`);
        res.send(productos);
    } else {
        const productos = await pool.query(`SELECT * FROM product WHERE name like '%${req.params.buscar}%'`);
        res.send(productos);
    }
});

module.exports = router;