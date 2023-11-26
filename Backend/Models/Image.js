

const mongoose=require("mongoose")

const imageSchema=new mongoose.Schema({
    image:String
});

const ImagetModel=mongoose.model("img_detailes",imageSchema);


module.exports={ImagetModel}
