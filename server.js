const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hi guys, welcome to my youtube shannel');
});

app.get('/me', (req, res) => {
  res.send('I am a very curious and playful person');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
