const mongoose=require("mongoose")
const validator=require("validator")

const createlogin=new mongoose.Schema({
   
    email:{
        type:String,
        // unique:[true,"emailid already present"],
        validator(value){
            if(!validator.isEmail(value))  
            {
                throw new Error("error")
            }
        }
    },
    phonenumber:{
        type:Number,
        minlength:10,
        maxlength:10,
        require:true
    },
   password:{
      type:String,
      require:true
   }
})

const venderloginModel=mongoose.model("loginVender-data",createlogin)
module.exports=venderloginModel