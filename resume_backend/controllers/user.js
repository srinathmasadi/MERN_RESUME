const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.addUser = async(req, res) => {
    try {
        
        const {name, email, phone,password,confirmPassword} = req.body;
        if(name!=="" && email!=="" && phone!=="" && password!=="" && confirmPassword!=="") {
            const userExist = await User.findOne({email:email})
            const phoneExists = await User.findOne({phone:phone})
            if(userExist){
                res.status(400).json({message:"User already exists"})
            } else if(phoneExists){
                res.status(400).json({message:"Phone Number already exists"})
            } else{
                if(password === confirmPassword) {
                    const data = new User({name,email,phone,password,confirmPassword})
                    const response = await data.save();
                    res.status(200).json({message:"User Saved Successfully",data:response}) 
                } else{
                    res.status(400).json({message:"Passwords Not matching"})
                }
            }      

        } else{
            res.status(400).json({message:"Please fill all the required fields"})
        }
           
    }catch (error) {
        res.status(400).json({message:"error in creating user"});
        console.log(error)
    }
}

exports.logInUser = async(req,res)=> {
    try{
       const {email,password}= req.body
       if(email!=="" && password!=="") {
        const userLogin = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, userLogin.password);
        if(isMatch) {
            const token = jwt.sign(
                {email:userLogin.email, userId:userLogin._id},
                "secret_this_should_be_longer",
                {expiresIn:"1h"}
             );
             res.send({
                 message:"User Logged in Successsfully",
                 token: token,
                 expiresIn: 3600,
                 userId: userLogin._id
               });
            
        }else{
            res.status(400).json({message:"Invalid Credentials"});
        }
        
       } else{
        res.status(400).json({message:"Please fill all the required fields"});
       }   

    }catch(e){

        res.status(400).json({message:"Something went wrong",data:e});
        console.log(e)
    }
}