const mongoose=require('mongoose');

const ContentSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
    },
    text:{
        type:String
    },
    type:{
        type:String
    },
    difficulty:{
        type:Number
    },
    language:{
        type:String
    },
    count:{
        type:Number
    },
    seconds:{
        type:Number,
        default:0
    }
},{collection:'content'});

module.exports=mongoose.model('Content',ContentSchema);