require('dotenv').config()
const morgan = require('morgan');
const path = require('path');
//-------------------DATABASE-------------------------------
const { mongoose,connection } = require('./config-database');

const express = require('express');
//----------IMPORT ROUTER----------------------------------------
indexRouter = require('./routes/index');
//----------INSTANCE EXPRESS-------------------------------------
const app = express();
//----------CONFIG PORTS-----------------------------------------
app.set('port',process.env.PORT || 3000)
//----------CONFIG TEMPLATE ENGINE-------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//----------MIDLEWARES-------------------------------------------
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));//definiendo el directorio estatico
app.use(morgan('dev'));//aplicaion utiliza el modulo de morgan
app.use(express.urlencoded({extended: false}));//me permite entender los datos que se estan mandando desde los formularios

//----------ROUTING-----------------------------------------
app.use('/products',indexRouter);
app.listen(app.get('port'),()=>{ 
    console.log('Server on port '+ app.get('port')) 
    console.log('Please visit --> http://localhost:'+ app.get('port')) 
});