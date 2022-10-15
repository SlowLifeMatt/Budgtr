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
// new route
app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
})

// show route
app.get('/budget/:id', (req,res) => {
    // res.send(req.params.id)
    res.render('show.ejs', {
        allBudget: budget[req.params.id],
    })
})

//post route
app.post('/budget', (req,res) => {
    console.log(req.body)
  
    budget.push(req.body)
    // res.send('Data have been received')
  
    res.redirect('/budget')
  })



// listener
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});