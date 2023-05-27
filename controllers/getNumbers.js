
const User = require('../models/user.js');
const Order = require('../models/order.js');
const Product = require('../models/product.js');
const Service = require('../models/services.js');
const carModel = require('../models/carModel.js');




const handleGetUsers = async (req, res) => {

    console.log('numbers');

    let usersCount=0;
    let workersCount=0;
    let ordersCount=0;
    let productsCount=0;
    let servicesCount=0;
    let carModelsCount=0;



    const foundUser = await User.find({role: 'Basic'}).exec();

    const foundWorker = await User.find({role: 'worker'}).exec();

    const foundOrder = await Order.find({}).exec();

    const foundProduct = await Product.find({}).exec();
    const foundService = await Service.find({}).exec();
    const foundCarModel = await carModel.find({}).exec();

    usersCount=foundUser.length;
    workersCount=foundWorker.length;
    ordersCount=foundOrder.length;
    productsCount=foundProduct.length;
    servicesCount=foundService.length;
    carModelsCount=foundCarModel.length;


    res.status(200).send({
        "users":usersCount,
        "workers":workersCount,
        "orders":ordersCount,
        "products":productsCount,
        "services":servicesCount,
        "car_models":carModelsCount
    });

}

module.exports = { handleGetUsers };