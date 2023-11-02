
var jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
    
    let token = req.headers.authorization.split(" ")[1];
    

    jwt.verify(token, 'secret', function (err, decoded) {
        
        if (err) {
            res.json({Message:"Please login again authentication failed"})
        }

        req.body.key=decoded.userID
        // res.json({message:"aa ja bata"})
        next();
      });
}

module.exports = {
    authentication
}