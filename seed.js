'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {
  // title: { type: String, required: true},
  // description: { type: String, required: true},
  // status: { type: String, required: true},

  // ** await Model.create
  await Book.create({
    title: 'Good to Great',
    description: 'Written by Jim Collins, this book analyzes companies that made the transition from good to great and explores the key factors that enabled them to achieve sustained success.',
    status: 'Recommended',
  });

  console.log('saved Good to Great');

  await Book.create({
    title: 'The Lean Startup',
    description: 'This book by Eric Ries is a popular guide for entrepreneurs and startups on how to build and grow their businesses with a focus on rapid experimentation and customer feedback.',
    status: 'Recommended',
  });

  console.log('saved The Lean Startup');

  await Book.create({
    title: 'The Power of Habit',
    description: 'This book by Charles Duhigg explores the science of habit formation and how it can be used to improve personal and professional performance.',
    status: 'Highly Recommended',
  });

  console.log('saved The Power of Habit');

  mongoose.disconnect();
}

seed();
