const mongoose=require("mongoose")
const registerUserSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    contact:{
        type:Number,
        minlength:10,
        maxlength:10,
        require:true
    },
    password:{
        type:String
    },
    conformpassword:{
        type:String
    }
})

const registerUserModel=mongoose.model("user-reg-data",registerUserSchema)
module.exports=registerUserModel