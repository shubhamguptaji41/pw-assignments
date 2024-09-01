const express = require('express');
const app = express();

// Route for generating a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  res.json({ random: randomNumber });
});

// Start the server
const port = 3011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
