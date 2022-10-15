const express = require('express');
const budget = require('./models/budget.js');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: false}))



//              ROUTES

// index route
app.get('/budget', (req, res) => {
//   res.send('Welcome to Budgtr')
  res.render('index.ejs', {
    allBudget: budget
  })

});

// show route
app.get('/budget/:id', (req,res) => {
    // res.send(req.params.id)
    res.render('show.ejs', {
        allBudget: budget[req.params.id],
    })
})

// listener
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});