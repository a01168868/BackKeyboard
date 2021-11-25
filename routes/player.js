//RUTAS
const router=require("express").Router();
const playerController=require("../controllers/player");

router.post('/add',playerController.addPlayer);
router.post('/addSession',playerController.addSessionPlayer);
router.get("/getAll",playerController.getAllPlayer);
router.post("/getOne/",playerController.getPlayer);
router.post("/getRandom",playerController.getRandomPlayer);
router.patch("/update",playerController.updatePlayer);
router.delete("/remove",playerController.removePlayer);

module.exports=router;