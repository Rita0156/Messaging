const bcrypt=require("bcryptjs");
const Router=require("express");
const {SignupModel}=require("../Models/Signup");
const jwt=require("jsonwebtoken");
const { configDotenv } = require("dotenv");
const SignupControler=Router();
require('dotenv').config();
const Secrete=process.env.JWT_SECRET

SignupControler.post("/signup",async(req,res)=>{
    const { email, pass ,name} = req.body;
    console.log(req.body,"req body");
     const isPresent=await SignupModel.find({email});

     if(isPresent==false){
        bcrypt.hash(pass,5,async function(err,hash){
            if(err){
               console.log("err errr",err);
               res.json("plaese try again",err);
            }
            console.log("outside req");
            const customer= new SignupModel({
               name,
               email,
               password:hash,
               customerId:req._id
            })
            try{
               await customer.save()
               res.json("signup successfull")
            }
            catch(err){
                res.json({massage:"something went wrong",err})
            }
        })
     }
     else{
         res.json("user is already present")
      }
    // res.json("Signup Successfull")
    
})
SignupControler.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    //console.log(req.body,"req body")
    const customer=await SignupModel.findOne({email})
    console.log(customer,"customer")
    //console.log(customer.password,"customer")
    const hash=customer.password;
    //console.log(hash,"has",pass,"pass")
    if(!customer){
        res.json("user not found")
    }

    bcrypt.compare(pass, hash, function(err, result) {
        // result == true
        //console.log(hash,"   ",password)
        //console.log(hash," ",pass)'
        if(err){
            //console.log("in err condi",err)
            res.json("error getting")
        }
        
       //console.log(err, "errere",pass,"pass",hash,"hash")
        if(result){
            
              const token=jwt.sign({customerId:customer._id,name:customer.name},Secrete)
              //console.log(token,"token")
              res.json({message:"Login successfull",token:token})
        }else{
            res.json("Invalid credential");
        }
        
    });
})

module.exports={SignupControler}

