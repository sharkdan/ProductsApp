//imports
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const mongoose = require('mongoose');

//initialize the app
const app = express();

//database
let dev_db_url = 'mongodb://admin:abc123@ds143451.mlab.com:43451/productsapp';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

//routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

//starting the server
let port = 3000;

app.listen(port, function(){
  console.log('Server is up and running on port ' + port);
});

