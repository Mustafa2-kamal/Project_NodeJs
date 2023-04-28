const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const serviceSchema = new Schema({ //object

    serviceName: {
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