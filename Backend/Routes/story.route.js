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


StoryControler.post("/image_upload",async(req,res)=>{
    const {base64,customerId,name,massage,time}=req.body;
    console.log(req.body,"img uploading")
    try{
         const img = new PostModel({
            name,
            massage,
            Image:base64,
            time,
            customerId})
         await img.save()
         res.json({Status:'ok',message:"post created"})

    }
    catch{
        console.log("error get")
        res.json({Status:'error'})
    }
})

StoryControler.post("/create",async(req,res)=>{
    console.log(req.body,"inside create")
    const {customerId,name,base64,image,massage,time}=req.body;
    console.log(req.body,"create req body")
    const FinalPost=new PostModel({
        name,
        massage,
        Image:base64,
        time,
        customerId
     })
     console.log(FinalPost,"final post")
    try{
         

         await FinalPost.save()
         res.json("Post created successfully")
    }
    catch{
         res.json("something went wrong")
    }
})


// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//       cb(null,"pictures")
//     },
//     filename:(req,file,cb)=>{
//        cb(null,file.fieldname+"_"+Date.now())
//     }
    
// })

// const upload = multer({
//   storage:storage
// })
//console.log(storage,"storage")
//console.log(upload,"upload");


// StoryControler.get('/', (req, res) => {
//   PostModel.find({})
//   .then((data, err)=>{
//       if(err){
//           console.log(err,"i am getting error");
//       }
//       res.render('imagepage',{items: data})
//   })
// });


// StoryControler.post('/upload', upload.single('image'),async (req, res, next) => {
//     console.log("inside image uploading")
//     //const {customerid}=req.params;
    
//     //const update=await PostModel.find({customerId:req.body.customerId})
    
//     const {name,massage,time,customerId}=req.body;
//     console.log("req body",req.body)
//      console.log("image uploading");
//      var obj = {
//       name,
//       massage,
//       time,
//       customerId,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           contentType: 'image/png'
//       }
//     }
//   console.log("obj",obj)
//   const result=new PostModel(obj)
//   .then (async(err, item) => {
//       if (err) {
//           console.log(err)
//       }
//       else {
//          await  result.save();
//           res.redirect('/');
//       }
//   });
// });


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

StoryControler.delete("/delete/noteid",async(req,res)=>{
    const {noteid}=req.params
    const de=await PostModel.findOneAndDelete({_id:noteid, customerId:req.body.customerId},req.body)
    console.log(update,"update")
    if(de){
        res.send("story deleted");
    }else{
        res.send("couldn't deleted");
    }
})

module.exports={StoryControler}