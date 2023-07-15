
const mongoose=require("mongoose")

const selectedSchema = new mongoose.Schema({
   
  
    vendorName:{
        type:String,
    },
    vendorId:{
        type:String
    },
    vendorEmail:{
        type:String,
        
    },
    eventName:{
        type:String,
    },
    placeOfEvent:{
        type:String
    },
    proposalType:{
        type:String,
        
    },
    eventType:{
        type:String
    },
    budget:{
        type:Number
    },
    fromDate:{
        type:Date,
    },
    toDate:{
        type:Date,
        
    },
    foodPreference:{
        type:String
    },
    description:{
        type:String
    },
    events: {
        type: String
    },
    image: {
        type: String

    }

})

const selectedModel = mongoose.model("selected-data", selectedSchema )

module.exports = selectedModel;