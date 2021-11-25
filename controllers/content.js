const Content=require("../models/content.js");
const mongoose=require("mongoose");

/*
POST: localhost:8081/content/add
{
    "title"       :   "Prueba de Content",
    "text"        :   "Esto es una prueba para ver si ya jala \nEsta es otra línea\n\ty esta otra",
    "type"        :   "Frase",
    "difficulty"  :   2,
    "language"    :   "Es",
    "count"       :   0,
    "seconds"     :   0
}
*/
exports.addContent=async(req,res)=>{
    const content=new Content(req.body);
    content._id=new mongoose.Types.ObjectId();
    try{
        //Agregar documento a la colección
        await content.save();
        console.log("Content Saved");
        res.send({op:"Success"});
    }catch(err){
        console.log(err);
        res.send({op:"Error"});
    }
}

// GET: localhost:8081/content/getAll
exports.getAllContent=async(req,res)=>{
    const content=await Content.find();
    console.log(content);
    res.json(content);
}

// GET: localhost:8081/content/getOne/6199f99fa9c06eb179de3f2a
exports.getContent=async(req,res)=>{
    try{
        const content=await Content.findById(req.params.id);
        console.log("Find One Success");
        res.json(content);
    }catch(err){
        console.log(err);
        res.json({op: "Error"});
    }
}

/*
El filtro puede contener uno o todos los atributos
POST: localhost:8081/content/getRandom
{
    "type"        :   "Frase",
    "difficulty"  :   2,
    "language"    :   "Es"
}
*/
exports.getRandomContent=async(req,res)=>{
    //console.log(req.body);
    const content=await Content.find(req.body);
    var rand=Math.floor(Math.random() * content.length);
    //console.log(rand+content[rand]);
    res.json(content[rand]);
}

/*
PATCH: localhost:8081/content/update
{
    "id_objetivo": "6199fede17d39300c37fafb7",
    "title"       :   "Modificación",
    "text"        :   "blaBlablaala \nEsta es otra línea\n\ty esta otra",
    "type"        :   "Frase",
    "difficulty"  :   5,
    "language"    :   "Es"
}
*/
exports.updateContent=async(req,res)=>{
    try{
        await Content.findByIdAndUpdate(req.body.id_objetivo,
            {
                "title"         :      req.body.title,
                "text"          :      req.body.text,
                "type"          :      req.body.type,
                "difficulty"    :      req.body.difficulty,
                "language"      :      req.body.language
            }
        );
        console.log("Update Success");
        res.json({op: "Success"});
    }catch(err){
        console.log(err);
        res.json({op: "Error"});
    }
}


/*
DELETE: localhost:8081/content/remove
{
    "id_objetivo": "6199fede17d39300c37fafb7"
}
*/
exports.removeContent=async(req,res)=>{
    try{
        await Content.findByIdAndRemove(req.body.id_objetivo);
        console.log("Content Deleted");
        res.json({op: "Success"});
    }catch(err){
        console.log(err);
        res.json({op: "Error"});
    }
}

