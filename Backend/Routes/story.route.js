const multer  = require('multer')
//const upload = multer({ dest: './Pictures/Rita' })
const Router=require("express")
const {PostModel}=require("../Models/Posts")
//const {Auth}
const {ImagetModel}=require("../Models/Image")
const StoryControler=Router()
const path=require("path")
const fs=require("fs")
const { ok } = require('assert')

// all story getting request

StoryControler.get("/story",async(req,res)=>{
    console.log("my story")
      const data=await PostModel.find()
      console.log(data);
      res.json(data)
})

// login person's story getting

StoryControler.get("/mystory",async(req,res)=>{
    const mystory=await PostModel.find({customerId:req.body.customerId})
    console.log(mystory)
    res.json(mystory)
})

//  story create request

StoryControler.post("/image_upload",async(req,res)=>{
    const {base64,customerId,name,massage,time}=req.body;
    console.log(req.body,"img uploading")
    try{
         const img = new PostModel({
            name:req.body.name,
            massage,
            Image:base64,
            time,
            customerId,
            
        })
         await img.save()
         res.json({Status:'ok',message:"post created"})

    }
    catch{
        console.log("error get")
        res.json({Status:'error'})
    }
})

// story update request
StoryControler.patch("/update/noteid",async(req,res)=>{
    const {noteid}=req.params
    const update=await PostModel.findByIdAndUpdate({_id:noteid, customerId:req.body.customerId},req.body)
    console.log(update,"update")
    if(update){
        res.send("story updated");
    }else{
        res.send("couldn't updated");
    }
})

// strory delete request

StoryControler.delete("/mystory:id",async(req,res)=>{
    console.log("inside delete")
    const postDelete=await PostModel.findByIdAndDelete({_id:ObjectID(req.params.id),customerId:req.body.customerId})
   try{
    
    
     console.log(postDelete,"postDelete ")
     if(!req.params.id || postDelete==null){
        console.log("not find noteid",)
        return res.status(400).json("something went wrong")
     }
     else if(postDelete==true){
        console.log("id is find")
        res.json({postDelete,massage:"post deleted successfully"})
     }
   }
   catch(e){
    console.log("inside error of delete request")
      console.log(e,"error");
      res.json({message:"Something went wrong",e})
   }
})

module.exports={StoryControler};
