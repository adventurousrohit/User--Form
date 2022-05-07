const mongoose = require("mongoose")

const UserSchema= mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    phone:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("User",UserSchema)