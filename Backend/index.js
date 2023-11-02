const express=require("express")
require('dotenv').config()
const PORT=process.env.PORT
const {connectDB}=require("./confing/db.js")
const {SignupModel}=require("./Models/Signup.js")
const {PostModel}=require("./Models/Posts.js")

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    const result=PostModel.find()
    res.send(result)
})

app.listen(PORT,async()=>{
   try{
      await connectDB
      console.log("connected to db")
   }
   catch(arr){
      console.log("failed to connect db")
      console.log(err)
   }
   console.log("Running port is---",PORT)
})