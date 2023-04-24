'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (request, response)=>{
  response.status(200).send('Welcome to my Can of Books server!');
});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`Yay! listening on ${PORT}`));
