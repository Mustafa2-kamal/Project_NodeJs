const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const userSchema = new Schema({ //object

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    cardModel: {
        type: String,
    },


    // role: {
    //     type: String,
    //     default: "Basic"
    // }

});


//create model based on schema
const User = mongoose.model('User', userSchema);

//export the model
module.exports=User;