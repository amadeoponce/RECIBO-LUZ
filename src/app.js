const express = require('express');
const path = require('path');
const morgan = require('morgan');
coclnst mongoose = require('mongoose');

const app = express();


//connecting to db
mongoose.connect('mongodb+srv://diego:diego@cluster0-rbl2m.mongodb.net/test').then(db => console.log('Db connected')).catch(err => console.log(err));
//mongodb://localhost/RECIBO-LUZ
//import routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', indexRoutes);

//starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})





