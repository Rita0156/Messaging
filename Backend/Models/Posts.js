
const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

const postsSchema=new mongoose.Schema({
    name:String,
    massage:String,

    time:String,
    customerId:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
    
});

const PostModel=mongoose.model("reel",postsSchema)


module.exports={PostModel};