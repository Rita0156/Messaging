const express=require("express")
require('dotenv').config()
const PORT=process.env.PORT || 7500
const {connectDB}=require("./confing/db.js")
var bodyParser = require('body-parser');

const {authentication}=require("./Authentication/Auth.js")
const cors=require("cors")
const {SignupControler}=require("./Routes/signup.route.js")

const {StoryControler}=require("./Routes/story.route.js")

const app=express()
app.use(cors());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(express.limit(100000000))

app.use(express.json({limit:"50mb"}))
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));




app.get("/",(req,res)=>{
    return res.send("api is working currect ");
})

app.use("/",SignupControler);




app.use(authentication);

app.use("/",StoryControler)

app.listen(PORT,async()=>{
   try{
      await connectDB;
      console.log("connected to db");
   }
   catch(err){
      console.log("failed to connect db");
      console.log(err);
   }
   console.log("Running port is---",PORT);
})