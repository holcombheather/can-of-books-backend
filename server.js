'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Yay! listening on ${PORT}`));

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

// ENDPOINTS
app.get('/', (request, response)=>{
  response.status(200).send('Welcome to my Can of Books server!');
});

app.get('/test', (request, response) => {

  response.send('test request received');

});

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error. message) ;
});