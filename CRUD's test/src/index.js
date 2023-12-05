const express = require ('express');
const morgan = require ('morgan');
const path = require ('path');
const mysql = require ('mysql');
const  myConnection = require ('express-myconnection');
//const morgan = require('morgan');

const app = express();

//Routes imports

const tasaRoutes = require('./routes/tasa');
const exp = require('constants');

//Inicializar y configurarción del puerto del servidor
 app.set('port', process.env.PORT || 4000);
 app.set('views', path.join (__dirname, 'views'));
 app.set('view engine', 'ejs');

//middlewares
 app.use(morgan('dev'));
 app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'dbcrud'
 }, 'single'));
 app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', tasaRoutes);
 
//Global files

app.use(express.static(path.join(__dirname, 'public')));

 //Starting server
app.listen(app.get('port'), () => {
    console.log('Server port 3000');
});