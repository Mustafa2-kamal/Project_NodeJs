const mongoose=require("mongoose");
const { Schema } = mongoose;

//define structure
const joinSchema = new Schema({ //object


    certificateImage: {
        type: Buffer, 
    },

    workerName: {
        type: String,
        required: true
    },

    workerEmail: {
        type: String,
        required: true
    },

    carBrand: {
        type: String,
        required: true,
    },

    serviceName: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        default:'-'
    },

});




joinSchema.methods.toJSON = function () {
    const join = this
    const joinObject = join.toObject()

    if(joinObject.certificateImage){
        joinObject.certificateImage=joinObject.certificateImage.toString("base64")
    }

    return joinObject
}




//create model based on schema
const join = mongoose.model('join', joinSchema);

//export the model
module.exports=join;