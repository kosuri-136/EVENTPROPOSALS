const jwt = require("jsonwebtoken");

//Authentication middle

exports.requireLogin = (req,res,next) =>{
    try{
          if(req.headers.authorization){
            const token = req.headers.authorization
            //verify token
            const decode = jwt.verify(token,"secret_key")
            //attach token to request
            req.data = decode
            next()
          }
          else{
            return res.status(400).json({message: "Unauthorized"})
          }
    }catch(err){
        console.log("Somthing went wrong")
    }

}