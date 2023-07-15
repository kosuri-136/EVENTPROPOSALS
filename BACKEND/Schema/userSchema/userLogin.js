const  mongoose  = require("mongoose")

const userlogin=new mongoose.Schema({
   
    email:{
        type:String
       
    },
   
   password:{
      type:String,
      require:true
   }
})

const userloginModel=mongoose.model("loginUser-data",userlogin)
module.exports=userloginModel