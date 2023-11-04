
const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

const postsSchema=new mongoose.Schema({
    name:String,
    massage:String,
    image:String,
    time:Date
    
})

const PostModel=mongoose.model("reel",postsSchema)

module.exports={PostModel}