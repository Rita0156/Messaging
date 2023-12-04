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
var ObjectId = require('mongodb').ObjectId;

// strory delete request

StoryControler.delete("/mystory/:delid",async(req,res)=>{
    console.log("inside delete")
    const {delid}=req.params
    console.log(delid,"delete,id")
    const deletePost=await PostModel.findByIdAndDelete({_id:delid, customerId:req.body.customerId})
    console.log(deletePost,"deletePost");
    if(deletePost){
        res.send("story deleted");
    }else{
        res.send("couldn't delete");
    }
})


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
            name,
            massage,
            Image:base64,
            time,
            customerId,
            postID:req._id
        })
         await img.save()
         res.json({Status:'ok',message:"post created"});

    }
    catch{
        console.log("error get");
        res.json({Status:'error'});
    }
})

// story update request
StoryControler.patch("/update/noteid",async(req,res)=>{
    const {noteid}=req.params
    const update=await PostModel.findByIdAndUpdate({_id:noteid, customerId:req.body.customerId},req.body)
    console.log(update,"update");
    if(update){
        res.send("story updated");
    }else{
        res.send("couldn't updated");
    }
})




module.exports={StoryControler};
