const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');

const playerRoutes=require("./routes/player");
const contentRoutes=require("./routes/content");

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/content",contentRoutes);
app.use("/player",playerRoutes);

mongoose.connect('mongodb://vmanager:tecCEM@54.173.202.133:27017/testdb?authSource=admin')
.then(()=>{
    app.listen(8081,()=>console.log("Escuchando en puerto 8081"));
})
.catch(err=>console.log(err))