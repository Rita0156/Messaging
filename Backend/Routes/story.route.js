
const Router=require("express")
const {PostModel}=require("../Models/Posts")
const StoryControler=Router()

StoryControler.get("/story",async(req,res)=>{
      const data=await PostModel.find()
      res.send(data)
})

StoryControler.get("/mystory",async(req,res)=>{
    const mystory=await PostModel.find({_id:req.body.customerId})
    res.send(mystory)
})

StoryControler.post("/create",async(req,res)=>{
          const {name,message,time,customerId}=req.body;

          const story=new PostModel({
            name,
            massage,
            time,
            customerId
          })
          try{
            await story.save()
            res.send("story created successfully")
          }
          catch{
            res.send("something went wrong")
          }
})

StoryControler.patch("/update/noteid",async(req,res)=>{
    const {noteid}=req.params
    const update=await PostModel.findByIdAndUpdate({_id:noteid, customerId:req.body.customerId},req.body)

    if(update){
        res.send("story updated")
    }else{
        res.send("couldn't updated")
    }
})

module.exports={StoryControler}