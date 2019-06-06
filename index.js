const express = require('express');
const cowsay = require('cowsay');
const cors = require('cors');
const path = require('path');
const routes = require('./server/api');

// Create the server
const app = express();

app.use(routes);
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
