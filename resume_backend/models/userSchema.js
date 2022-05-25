const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requird:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
});

userSchema.pre("save", async function(next) {

    if(this.isModified("password")){
      
        this.password = await bcrypt.hash(this.password, 10);     
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);  
    }
    next();
});

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;