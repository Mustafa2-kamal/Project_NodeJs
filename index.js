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

app.use('/getImage', require('./routes/getImage'));

app.use('/getWorkers', require('./routes/getWorkers'));

app.use('/addWorker', require('./routes/addWorker'));

app.use('/addCarMaker', require('./routes/addCarMaker'));

app.use('/carMakers', require('./routes/getCarMaker'));

app.use('/servicesNames', require('./routes/servicesNames'));

app.use('/password-reset', require('./routes/resetPassword'));

app.use('/sendEmail', require('./routes/sendEmail'));

app.use('/confirmResetPassword', require('./routes/confirmResetPassword'));



app.use('/addProduct', require('./routes/addProduct.js'));

app.use('/updateProduct', require('./routes/updateProduct.js'));

app.use('/Products', require('./routes/getProducts.js'));

app.use('/removeProduct', require('./routes/deleteProduct.js'));



app.use('/addOrder', require('./routes/addOrder.js'));

app.use('/userOrders', require('./routes/getUserOrders.js'));
app.use('/workerOrders', require('./routes/getWorkerOrders.js'));

app.use('/updateOrder', require('./routes/updateOrder.js'));

app.use('/rateWorker', require('./routes/rateWorker.js'));

app.use('/topWorkers', require('./routes/topWorkers.js'));



app.use('/removeUser', require('./routes/deleteUser.js'));

app.use('/allUsers', require('./routes/getUsers.js'));

app.use('/someProduct', require('./routes/getRandomProduct.js'));

app.use('/allOrders', require('./routes/getAllOrders.js'));



app.use('/userHistoryOrders', require('./routes/userHistoryOrder.js'));



app.use('/addOrderImage', require('./routes/addOrderImage.js'));
app.use('/getOrderImage', require('./routes/getOrderImage.js'));


app.use('/addProductImage', require('./routes/addProductImage.js'));

app.use('/getProductImage', require('./routes/getProductImage.js'));

app.use('/getNumbers', require('./routes/getNumbers.js'));

app.use('/updateProductQuantity', require('./routes/updateProductQuantity.js'));

app.use('/getRecentUsers', require('./routes/getRecentUsers.js'));

app.use('/getRecentOrders', require('./routes/getRecentOrders.js'));



app.use('/joinRequest', require('./routes/joinAsAServiceProvider.js'));
app.use('/getJoinRequests', require('./routes/getJoinRequests.js'));


app.use('/addCertificate', require('./routes/addWorkerCertificate.js'));
app.use('/getCertificate', require('./routes/getWorkerCertificate.js'));

app.use('/allWorkers', require('./routes/getAllWorkers.js'));

app.use('/getRemainTime', require('./routes/getRemainTime.js'));



app.use('*',(req,res)=>{
  return res.status(404).json({message:'Page not found'})
})







//to run server nodemon index.js