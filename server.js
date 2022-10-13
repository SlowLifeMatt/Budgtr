const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: false}))

const budget = require('./models/budget.js');


//              ROUTES

// index route
app.get('/budget', (req, res) => {
  res.send('Welcome to Budgtr')

});

// listener
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});