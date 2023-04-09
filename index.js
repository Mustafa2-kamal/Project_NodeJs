const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const cors = require('cors')
app.use(cors({ 
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials:true
}))


const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://mostafa:2023db@cluster0.rq3ts2t.mongodb.net/mongodb")
  .then( result => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  })
  .catch( err => {
    console.log(err);
  }); 



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/signup', require('./routes/signup'));

app.use('/signin', require('./routes/signin'));




//to run server nodemon index.js