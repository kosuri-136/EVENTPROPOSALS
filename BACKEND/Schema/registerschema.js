

const mongoose=require("mongoose")
const registerVenderSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String, unique : true
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

const registerModel=mongoose.model("vender-reg-data",registerVenderSchema)
module.exports=registerModel