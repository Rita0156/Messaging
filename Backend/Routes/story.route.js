const multer  = require('multer')
//const upload = multer({ dest: './Pictures/Rita' })
const Router=require("express")
const {PostModel}=require("../Models/Posts")
//const {Auth}
const StoryControler=Router()
const path=require("path")
const fs=require("fs")



StoryControler.get("/story",async(req,res)=>{
    console.log("my story")
      const data=await PostModel.find()
      console.log(data)
      res.json(data)
})

StoryControler.get("/mystory",async(req,res)=>{
    const mystory=await PostModel.find({customerId:req.body.customerId})
    console.log(mystory)
    res.json(mystory)
})
StoryControler.post("/create",async(req,res)=>{
    const {customerId}=req.body
    console.log(req.body,"create body")
    const create=new PostModel({
     name:req.body.name,
     massage:req.body.massage,
     time:req.body.time,
     customerId
    })
    await create.save()
    res.json("Post Created")
})

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"pictures")
    },
    filename:(req,file,cb)=>{
       cb(null,file.fieldname+"_"+Date.now())
    }
    
})

const upload = multer({
  storage:storage
})
//console.log(storage,"storage")
//console.log(upload,"upload");


StoryControler.get('/', (req, res) => {
  PostModel.find({})
  .then((data, err)=>{
      if(err){
          console.log(err,"i am getting error");
      }
      res.render('imagepage',{items: data})
  })
});


StoryControler.post('/upload', upload.single('image'),async (req, res, next) => {
    console.log("inside image uploading")
    //const {customerid}=req.params
    
    //const update=await PostModel.find({customerId:req.body.customerId})
    
    const {name,massage,time,customerId}=req.body;
    console.log("req body",req.body)
     console.log("image uploading");
     var obj = {
      name,
      massage,
      time,
      customerId,
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
    }
  console.log("obj",obj)
  const result=new PostModel(obj)
  .then (async(err, item) => {
      if (err) {
          console.log(err)
      }
      else {
         await  result.save();
          res.redirect('/');
      }
  });
});


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