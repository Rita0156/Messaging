
const mongoose=require("mongoose")

const signSchema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    customerId:{type:String,require:true}
})

const SignupModel=mongoose.model("message",signSchema)

module.exports={SignupModel}