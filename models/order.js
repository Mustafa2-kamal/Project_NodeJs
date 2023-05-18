const mongoose=require("mongoose");
const { Schema } = mongoose;

//define structure
const orderSchema = new Schema({ //object

    //id
    userEmail: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
    },

    carModel: {
        type: String,
        required: true,
    },

    workerEmail: {
        type: String,
        required: true
    },

    workerName: {
        type: String,
        required: true
    },

    serviceName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        default:0.5
    },

    status: {
        type: String,
        required: true
    },

    note: {
        type: String,
        default:''
    },

    city: {
        type: String,
        default:'---'
    },

    street: {
        type: String,
        default:'---'
    },

    date:{
        type: Date,
        required: true,
        default:  Date.now(),
    },
    delivery:{
        type: String,
        default:'-'
    },
    payment: {
        type: String,
        default:'-'
    },

});


//create model based on schema
const Order = mongoose.model('Order', orderSchema);

//export the model
module.exports=Order;