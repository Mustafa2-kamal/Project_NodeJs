const express = require('express')
const app = express()
const port = 3000


const helmet = require('helmet')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const cors = require('cors')
app.use(cors({ 
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS','PATCH'],
  allowedHeaders: ['Origin','Content-Type','Accept', 'Authorization'],
  credentials:true
}))


const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://mostafa:2023db@cluster0.rq3ts2t.mongodb.net/mongodb")
  .then( result => {
    app.listen(process.env.PORT || port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  })
  .catch( err => {
    console.log(err);
  }); 

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/signup', require('./routes/signup'));

app.use('/signin', require('./routes/signin'));

app.use('/userInfo', require('./routes/userInfo'));

app.use('/userUpdate', require('./routes/updateUser'));

app.use('/changePassword', require('./routes/changePassword'));

app.use('/updateLocation', require('./routes/updateLocation'));

app.use('/addService', require('./routes/addService'));

app.use('/allServices', require('./routes/getAllServices'));

app.use('/services', require('./routes/getRandomServices'));

app.use('/addCarModel', require('./routes/addCarModel'));

app.use('/carModels', require('./routes/getCarModel'));

app.use('/addImage', require('./routes/addImage'));

app.use('/getWorkers', require('./routes/getWorkers'));

app.use('/addWorker', require('./routes/addWorker'));

app.use('/addCarMaker', require('./routes/addCarMaker'));

app.use('/carMakers', require('./routes/getCarMaker'));

app.use('/servicesNames', require('./routes/servicesNames'));

app.use('/resetPassword', require('./routes/resetPassword'));

app.use('/sendEmail', require('./routes/sendEmail'));







//to run server nodemon index.js