const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const productSchema = new Schema({ //object

    //id
    name: {
        type: String,
        required: true,
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

    type: {
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

    imageUrl: {
        type: String,
        required: true
    }

});


//create model based on schema
const Product = mongoose.model('Product', productSchema);

//export the model
module.exports=Product;