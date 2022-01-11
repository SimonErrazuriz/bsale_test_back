const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool(
    {
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        user: 'bsale_test',
        password: 'bsale_test',
        database: 'bsale_test'
    }
);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Se perdió la conección a la base de datos');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conecciones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conección a la base de datos fue rechazada');
        }
    }
    if (connection) connection.release();
    console.log('Conección exitosa a la base de datos');
    return;
});

/* Promisify Pool */
pool.query = promisify(pool.query);

module.exports = pool;