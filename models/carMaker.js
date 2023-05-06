const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const carModelSchema = new Schema({ //object

    carMaker: {
        type: String,
        required: true,
        unique: true
    }

});


//create model based on schema
const CarMaker = mongoose.model('CarMaker', carModelSchema);

//export the model
module.exports=CarMaker;