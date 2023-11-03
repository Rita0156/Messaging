const express=require("express")
require('dotenv').config()
const PORT=process.env.PORT || 7500
const {connectDB}=require("./confing/db.js")
const {SignupModel}=require("./Models/Signup.js")
const {PostModel}=require("./Models/Posts.js")
const {authentication}=require("./Authentication/Auth.js")
const cors=require("cors")
//const {authorization}=require("./Authentication/Auth.js")

const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("api is working currect")
})
app.use(cors())
app.post("/signup",async(req,res)=>{
    let payload = req.body;
    
    const { password } = req.body;
    var hash = bcrypt.hashSync(password, 8);
    let new_data = new SignupModel({ ...payload, password: hash });
    
await new_data.save();

    res.json({Message:"signup successfuly"});
    res.send("sing up successfull")
    console.log("user added")
})

app.post("./login",async(req,res)=>{
    const { password,email } = req.body;
    let user =await  SignupModel.findOne({ email });
    if (!user) {
        res.json({Message:"signup please"});
    }
    let hash = user.password;
    
   
    bcrypt.compare(password, hash, async function (err, result) {
        if (err) {
           
            res.json({Message:"login successfuly"})
        }
        var token = jwt.sign({ userID: user._id }, 'secret');
        res.json({ Message: "Log in successfully", token: token })
        
   
});
})

app.use(authentication)
app.get("/story",async(req,res)=>{
    const result= await PostModel.find()
    res.send(result)
})
app.post("/create",  async(req,res)=>{
       let payload=req.body;
       const data=new PostModel(payload)
       await data.save()
       res.send("story created")
})
app.patch("/edit",(req,res)=>{
    res.send("post updated")
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