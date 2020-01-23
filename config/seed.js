// Require necessary NPM Packages
const express = require('express');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// Require Mongoose Model for Article
const Article = require('../app/models/article');

router.get('/Articles/seed', (req, res) => {
    Article.insertMany([
      {
        title: 'Book1',
        content: 'Contents of Book1',
        author: 'Author1',
        publishedOn: '01/01/2020',
        published: true
      },
      {
        title: 'Book2',
        content: 'Contents of Book2',
        author: 'Author2',
        published: true
      },
      {
        title: 'Book3',
        content: 'Contents of Book3',
        author: 'Author3',
        publishedOn: '02/01/2020',
        published: true
      }
    ], (err, fruits) => {
      res.json(fruits);
    })
  });

  module.exports = router;