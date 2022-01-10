/* Rutas principales */
const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/productos', async (req, res) => {
    const productos = await pool.query('SELECT * FROM product');
    res.send(productos);
});

module.exports = router;