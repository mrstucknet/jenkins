// Import express
const express = require('express');

// Create an express app
const app = express();

// Set a port number
const PORT = process.env.PORT || 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
