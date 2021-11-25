const Player=require("../models/player.js");
const mongoose=require("mongoose");

/*
POST: localhost:8081/player/add
{
    "nickname"       :   "MiguelJTC",
    "pass"           :   "123",
    "sessions"       :   "",
    "num_sessions"   :   2
}
*/
exports.addPlayer=async(req,res)=>{
    const player=new Player(req.body);
    player._id=new mongoose.Types.ObjectId();
    try{
        //Agregar documento a la colección
        await player.save();
        console.log("Player Saved");
        res.send({op:"Success"});
    }catch(err){
        console.log(err);
        res.send({op:"Error"});
    }
}
 


/*
PATCH: localhost:8081/player/addSession
{
    "id_objetivo": "6199fede17d39300c37fafb7",
    "title"       :   "Modificación",
    "text"        :   "blaBlablaala \nEsta es otra línea\n\ty esta otra",
    "type"        :   "Frase",
    "difficulty"  :   5,
    "language"    :   "Es"
}
*/
exports.addSessionPlayer=async(req,res)=>{
    try{
        console.log("Body: %j",req.body);
        await Player.findByIdAndUpdate(req.body.idUsuario,
            {
                "$push":{
                    "sessions" : JSON.stringify(req.body)
                }
            }
        );
        console.log("Update Success");
        res.json({op: "Success"});
    }catch(err){
        console.log("ERROR: "+err);
        res.json({op: "Error"});
    }
}



exports.getPlayer=async(req,res)=>{
    try{
        const player=await Player.findById(req.body.id,'sessions nickname');
        console.log("Find One Success");
        res.json(player);
    }catch(err){
        console.log(err);
        res.json({op: "Error"});
    }
}



exports.getAllPlayer=async(req,res)=>{

}


exports.getRandomPlayer=async(req,res)=>{

}


exports.updatePlayer=async(req,res)=>{
 
}


exports.removePlayer=async(req,res)=>{

}

