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
        default:"Nablus"
    },

    street: {
        type: String,
        default:"ld Campus Street 7"
    },

    longitude: {
        type: Number,
        default:35.220625
    },

    latitude: {
        type: Number,
        default:32.22755
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
        type: Number,
    }


});


//create model based on schema
const User = mongoose.model('User', userSchema);

//export the model
module.exports=User;