require("dotenv").config()
var jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
    if(!req.headers.authorization){
        res.json("signup first");
    }
    //console.log(req.headers,"header");


    const token = req.headers.authorization.split(" ")[1];
    
      console.log(token,"token");

      
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        
        if (err) {
            res.json({Message:"Please login again authentication failed",err})
        }

        req.body.customerId=decoded.customerId;
        // res.json({message:"aa ja bata"});
        next();
      });
}

module.exports = {
    authentication
}

