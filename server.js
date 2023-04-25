'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const Book = require('./models/book');

const app = express();

// MIDDLEWARE
app.use(cors());

// !! Don't forget to bring this in! -- body parser to bring in 
app.use(express.json());

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

app.get('/books', async (request, response, next) => {
  try {
    let allBooks = await Book.find({});

    response.status(200).send(allBooks);
  } catch (error) {
    next(error);
  }
});

app.post('/books', postBook);

async function postBook(request, response, next){
  console.log(request.body);

  try {
    //TODO: take in the data that comes in on the request
    let bookData = request.body;

    //TODO: have my Model create the new instance of a cat to my DB
    let createdBook = await Book.create(bookData);

    //TODO: send that on the response
    response.status(200).send(createdBook);

  } catch (error) {
    next(error);
  }
}

app.delete('/books/:bookID', deleteBook);

async function deleteBook (request, response, next){
  try {
    // console.log(request.params);

    let id = request.params.bookID;

    await Book.findByIdAndDelete(id);

    response.status(200).send('Book deleted!');
  } catch (error) {
    next(error);
  }
}

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
