const router = require("express").Router();
const startupsController = require("../controllers/startupsController");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const formData = require("multer"),
storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"starterList"
    }
}),
uploads = formData({storage:storage}),
noImageFormParser = uploads.none(),
startupImagesFormParser = uploads.fields([{name:"logo",maxCount:1},{name:"images"},{name:"ownerImage",maxCount:1}]);


router.get("/", startupsController.index, startupsController.respondJSON);
router.post("/create", startupImagesFormParser, startupsController.new, startupsController.respondJSON);
router.get("/:id", startupsController.retrieve, startupsController.respondJSON);
router.post("/:id/upvote", noImageFormParser, startupsController.upvote,startupsController.respondJSON);
router.post("/:id/comments", noImageFormParser, startupsController.comment,startupsController.respondJSON);
router.put("/:id/update", startupImagesFormParser, startupsController.update, startupsController.respondJSON);
router.delete("/:id/delete", startupsController.delete, startupsController.respondJSON);

module.exports = router;