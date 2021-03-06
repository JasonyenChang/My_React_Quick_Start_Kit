const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: [
    'http://localhost:8080'
  ],
  credentials: true,
  // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  // allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

app.get('/user', (req, res) => {
  console.log('user');
  res.send({ user: 'Jason' });
});

const port = process.env.PORT || 5000;
console.log('Listening port: ', port);
app.listen(port);
