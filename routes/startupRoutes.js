const router = require("express").Router();
const startupsController = require("../controllers/startupsController");
const multer = require("multer");
let upload = multer({ dest: 'uploads/' });
let imageUps = upload.fields([{name:"logo"},{name:"images"},{name:"ownerImage"}]);

router.get("/", startupsController.index, startupsController.respondJSON);
router.post("/create", imageUps, startupsController.new, startupsController.respondJSON);
router.get("/:id", startupsController.retrieve, startupsController.respondJSON);
router.post("/:id/upvote", startupsController.upvote,startupsController.respondJSON);
router.post("/:id/comments", startupsController.comment,startupsController.respondJSON);
router.put("/:id/update", imageUps, startupsController.update, startupsController.respondJSON);
router.delete("/:id/delete", startupsController.delete, startupsController.respondJSON);

module.exports = router;