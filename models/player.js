const mongoose=require('mongoose');

const PlayerSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nickname:{
        type:String,
    },
    pass:{
        type:String
    },
    sessions:[String],
    num_sessions:{
        type:Number
    }
},{collection:'player'});

module.exports=mongoose.model('Player',PlayerSchema);