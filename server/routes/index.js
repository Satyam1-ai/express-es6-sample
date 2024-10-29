const express = require('express');
const router = express.Router();  // This initializes the router

// Define the route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Student ID is 21756630. Welcome to Express' });
});

module.exports = router;  // Export the router for use in other files

