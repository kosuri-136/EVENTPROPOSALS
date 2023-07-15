const mongoose=require("mongoose")

const ImageSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        data : Buffer,
        contentType : String
    }
})

module.exports  = ImageModel = mongoose.model('imageModel',ImageSchema)