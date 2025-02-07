import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
},{timestamps: true})

const User = mongoose.model('User', userSchema)
export default User