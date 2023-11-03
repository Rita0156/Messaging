const express=require("express")
require('dotenv').config()
const PORT=process.env.PORT || 7500
const {connectDB}=require("./confing/db.js")
//const {SignupModel}=require("./Models/Signup.js")
//const {PostModel}=require("./Models/Posts.js")
const {authentication}=require("./Authentication/Auth.js")
const cors=require("cors")
const {SignupControler}=require("./Routes/signup.route.js")
//const {authorization}=require("./Authentication/Auth.js")
const {StoryControler}=require("./Routes/story.route.js")

const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("api is working currect")
})
app.use(cors())
app.use("/",SignupControler)




app.use(authentication)
app.use("/",StoryControler)

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