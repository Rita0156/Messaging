const bcrypt=require("bcrypt")
const Router=require("express")
const {SignupModel}=require("../Models/Signup")
const jwt=require("jsonwebtoken")
const { configDotenv } = require("dotenv")
const SignupControler=Router()
require('dotenv').config()
const Secrete=process.env.JWT_SECRET

SignupControler.post("/signup",(req,res)=>{
    let payload = req.body;
    
    const { password ,email,name} = req.body;
    
    bcrypt.hash(password, 5,async function(err, hash) {
        // Store hash in your password DB.
        if(err){
            res.send("something went wrong please try again")
        }
        else{
            const user=new SignupModel({
                 name,
                email,
                
                password:hash
            })
            await user.save()
            res.send("signup successfull")
        }
    })
    
//await new_data.save();

    
})
SignupControler.post("/login",async(req,res)=>{
    const {email,password,customerId}=req.body;
    const customer=await SignupModel.findOne({email})
    const hash=customer.password
    bcrypt.compare(password, hash, function(err, result) {
        // result == true
        if(err){
            res.send("something went wrong please try again")
        }
        if(result){
              const token=jwt.sign({customerId:customer._id},Secrete)
              res.send("Login successfull"+" "+token)
        }else{
            res.send("Invalid credential")
        }
        
    });
})

module.exports={SignupControler}

