
const mongoose=require("mongoose")

const signSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    customerId:String
})

const SignupModel=mongoose.model("message",signSchema)

module.exports={SignupModel}