const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const carModelSchema = new Schema({ //object

    carModel: {
        type: String,
        required: true,
        unique: true
    }

});


//create model based on schema
const CarModel = mongoose.model('CarModel', carModelSchema);

//export the model
module.exports=CarModel;