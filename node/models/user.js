const mongooser = require('mongoose');

const UserSchema = new mongooser.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type: String,
        unique:true,
        required:true,
        lowercase: true,
    },
    password:{
        type: String,
        required:true,
        select:false,
    },
    createdAd:{
        type:Date,
        default:Date.now,
    },
});
const User = mongooser.model('User', UserSchema);
module.exports = User;