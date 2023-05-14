const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const orderSchema = new Schema({ //object

    //id
    user: {
        type: String,
        required: true,
    },

    worker: {
        type: String,
        required: true
    },

    serviceName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
    },

    status: {
        type: String,
        required: true
    },

    note: {
        type: String,
    },

    created_at:{
        type: Date,
        required: true,
        default: Date.now
    },
    delivery:{
        type: String,
    },
    payment: {
        type: String,
    },

});


//create model based on schema
const Order = mongoose.model('Order', orderSchema);

//export the model
module.exports=Order;