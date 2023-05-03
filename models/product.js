const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const productSchema = new Schema({ //object

    name: {
        type: String,
        required: true,
        unique: true
    },

    serviceType: {
        type: String,
        required: true
    },
    serviceImage: {
        type: String,
        required: true
    }

});


//create model based on schema
const Service = mongoose.model('Service', serviceSchema);

//export the model
module.exports=Service;