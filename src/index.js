const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

/* Inicializaciones */
const app = express();

/* Configuraciones */
app.set('port', process.env.PORT || 4001);

/* Middlewares */
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

/* Rutas */
app.use(require('./routes'));

/* Lanzar servidor */
app.listen(app.get('port'), () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`)
})
