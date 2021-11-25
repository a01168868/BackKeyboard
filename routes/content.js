//RUTAS
const router=require("express").Router();
const contentController=require("../controllers/content");

router.post('/add',contentController.addContent);
router.get("/getAll",contentController.getAllContent);
router.get("/getOne/:id",contentController.getContent);
router.post("/getRandom",contentController.getRandomContent);
router.patch("/update",contentController.updateContent);
router.delete("/remove",contentController.removeContent);

module.exports=router;