const multer  = require('multer')
//const upload = multer({ dest: './Pictures/Rita' })
const Router=require("express")
const {PostModel}=require("../Models/Posts")
const StoryControler=Router()
const path=require("path")



StoryControler.get("/story",async(req,res)=>{
      const data=await PostModel.find()
      res.send(data)
})

StoryControler.get("/mystory",async(req,res)=>{
    const mystory=await PostModel.find({_id:req.body.customerId})
    res.send(mystory)
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

StoryControler.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    const {name,massage,time}=req.body;
    PostModel.create({
      name,
      massage,
      time,
      image:req.file.filename

    })
    .then((result)=>{res.json(result)})
    .catch((err)=>console.log(err))
    console.log(req.file,req.body)
  })

StoryControler.post("/create",async(req,res)=>{
          const {name,massage,time,customerId}=req.body;

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