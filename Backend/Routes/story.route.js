const multer  = require('multer')
//const upload = multer({ dest: './Pictures/Rita' })
const Router=require("express")
const {PostModel}=require("../Models/Posts")
const StoryControler=Router()
const path=require("path")



StoryControler.get("/story",async(req,res)=>{
      const data=await PostModel.find()
      res.json(data)
})

StoryControler.get("/mystory",async(req,res)=>{
    const mystory=await PostModel.find({_id:req.body.customerId})
    res.json(mystory)
})

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"Pictures/Rita")
    },
    filename:(req,file,cb)=>{
       cb(null,file.fieldname + "_"+Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({
  storage:storage
})

StoryControler.post('/upload', upload.single('avatar'),async function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    
    const {name,massage,time,image,customerId}=req.body;
     image=req.file.filename;
    const user=new PostModel({
      name,
      massage,
      time,
      image ,
      customerId

    })
    try{
      await user.save()
      res.json("story created")
    }
    catch{
      res.json("story not created")
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