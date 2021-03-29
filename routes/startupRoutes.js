const router = require("express").Router();
const startupsController = require("../controllers/startupsController");

router.get("/", startupsController.index, startupsController.respondJSON);
router.post("/create", startupsController.new, startupsController.respondJSON);
router.get("/:id", startupsController.retrieve, startupsController.respondJSON);
router.post("/:id/upvote", startupsController.upvote,startupsController.respondJSON);
router.post("/:id/comments", startupsController.comment,startupsController.respondJSON);
router.put("/:id/update", startupsController.update, startupsController.respondJSON);
router.delete("/:id/delete", startupsController.delete, startupsController.respondJSON);

module.exports = router;