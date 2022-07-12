const express = require('express');
const app = express();
const morgan = require('morgan');

//configuracion del puerto
app.set('puerto', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//los routes
app.use(require('./routes/index'));
app.use('/api/personajes',require('./routes/personajes'));
app.use('/api/historia',require('./routes/historia'));

// comienza el servidor
app.listen(app.get('puerto'), () => {
    console.log(`El servidor esta en el puerto ${app.get('puerto')}`);
});