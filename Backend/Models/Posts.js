
//const { Timestamp } = require("mongodb");
const mongoose=require("mongoose")

const postsSchema=new mongoose.Schema({
    name:{type:String,require:true},
    massage:{type:String,require:true},
    Image:{type:String,require:true},
    time:{type:String,require:true},
    customerId:{type:String,require:true},
    _id:String
    
});

const PostModel=mongoose.model("reel",postsSchema);


module.exports={PostModel};
