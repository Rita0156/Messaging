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
//console.log(upload,"upload")


StoryControler.get('/', (req, res) => {
  PostModel.find({})
  .then((data, err)=>{
      if(err){
          console.log(err);
      }
      res.render('imagepage',{items: data})
  })
});


StoryControler.post('/upload', upload.single('image'), (req, res, next) => {
 
  var obj = {
      name: req.body.name,
      message: req.body.message,
      time:req.body.time,
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
  }
  PostModel.create(obj)
  .then ((err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          // item.save();
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