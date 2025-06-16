const express = require('express');
const app = express();
const port = 3000;

// ---------------------
// Middleware
// ---------------------
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// ---------------------
// Routes
// ---------------------
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// ---------------------
// Start the Server
// ---------------------
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
