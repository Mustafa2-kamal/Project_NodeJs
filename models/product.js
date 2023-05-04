const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const productSchema = new Schema({ //object

    name: {
        type: String,
        required: true,
        unique: true
    },

    // "id": 2,
    // "brand": "Mercedes",//car maker
    // "model": "C-Class",//name of product
    // "color": "White",//type -> mechanical assixories electrical 
    // quntity
    // "price": 45000,
    // "imageUrl":
    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

   color: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    quantity: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }

});


//create model based on schema
const Service = mongoose.model('Service', serviceSchema);

//export the model
module.exports=Service;