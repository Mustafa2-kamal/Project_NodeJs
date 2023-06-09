const mongoose=require("mongoose");
const { Schema } = mongoose;

//define structure
const orderSchema = new Schema({ //object

    //id

    imageUrl: {
        type: Buffer, 
    },
    
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
        default:0.1
    },

    price1: {
        type: Number,
        default:0.5
    },

    price2: {
        type: Number,
        default:0.5
    },

    estimatedTime:{
    type: Number,
    default:0.5
    },

    startingTime:{
        type: Date,
        required: true,
        default:  new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Gaza' })),
        },

    endingTime:{
        type: Date,
        required: true,
        default:  new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Gaza' })),

        },

    remainTime:{
        type: String,
        default:'n'
        },



    problem: {
        type: String,
        required: true,
        default:'n'
    },

    status: {
        type: String,
        required: true,
        default:'n'
    },

    status2: {
        type: String,
        required: true,
        default:'n'
    },

    note: {
        type: String,
        default:'-'
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
        default:  new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Gaza' })),
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




orderSchema.methods.toJSON = function () {
    const order = this
    const orderObject = order.toObject()

    if(orderObject.imageUrl){
        orderObject.imageUrl=orderObject.imageUrl.toString("base64")
    }

    return orderObject
}




//create model based on schema
const Order = mongoose.model('Order', orderSchema);

//export the model
module.exports=Order;