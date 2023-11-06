const bcrypt=require("bcrypt")
const Router=require("express")
const {SignupModel}=require("../Models/Signup")
const jwt=require("jsonwebtoken")
const { configDotenv } = require("dotenv")
const SignupControler=Router()
require('dotenv').config()
const Secrete=process.env.JWT_SECRET

SignupControler.post("/signup",(req,res)=>{
    const { email, password ,name} = req.body;
     bcrypt.hash(password,5,async function(err,hash){
         if(err){
            res.json("plaese try again")
         }
         const customer= new SignupModel({
            name,
            email,
            password:hash
         })
         try{
            await customer.save()
            res.json("signup successfull")
         }
         catch(err){
             res.json({massage:"something went wrong",err})
         }
     })
    // res.json("Signup Successfull")
    
})
SignupControler.post("/login",async(req,res)=>{
    const {email,password,customerId}=req.body;
    const customer=await SignupModel.findOne({email})
    const hash=customer.password
    bcrypt.compare(password, hash, function(err, result) {
        // result == true
        //console.log(hash,"   ",password)
        if(err){
            res.json("something went wrong please try again",err)
            //console.log(err)
        }
        if(result){
              const token=jwt.sign({customerId:customer._id},Secrete)
              res.json("Login successfull",token)
        }else{
            res.json("Invalid credential")
        }
        
    });
})

module.exports={SignupControler}

