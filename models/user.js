const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const userSchema = new Schema({ //object


    imgUrl: {
        type: String,
    },

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
        type: String,
        required: true
    },

    carModel: {
        type: String,
    },

    city: {
        type: String,
    },

    street: {
        type: String,
    },

    longitude: {
        type: Number,
    },

    latitude: {
        type: Number,
    },


    // city,street,longitude,latitude,bio,rating
    role: {
        type: String,
        default: "Basic"
    },

    major: {
        type: String,
    },

    carBrand:{
        type: String,
    },

    bio: {
        type: String,
    },

    rating: {
        type: String,
    }


});


//create model based on schema
const User = mongoose.model('User', userSchema);

//export the model
module.exports=User;