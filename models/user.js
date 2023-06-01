const mongoose=require("mongoose")
const { Schema } = mongoose;

//define structure
const userSchema = new Schema({ //object


    imageUrl: {
        type: Buffer, 
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
        required: true
    },

    carModel2: {
        type: String,
    },

    city: {
        type: String,
        default:"Nablus"
    },

    street: {
        type: String,
        default:"old Campus Street 7"
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
        default:1.5
    },

    userNotify: {
        type: String,
        default: "n"

    },

    workerNotify: {
        type: String,
        default: "n"

    },

    availableTime:{
        type: Date,
        required: true,
        default:   new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Gaza' })),
        },



});

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    if(userObject.imageUrl){
        userObject.imageUrl=userObject.imageUrl.toString("base64")
    }

    return userObject
}

//create model based on schema
const User = mongoose.model('User', userSchema);

//export the model
module.exports=User;