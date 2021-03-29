const router = require("express").Router();
const usersController = require("../controllers/usersController");
const formData = require("multer"),
storage = formData.memoryStorage(),
uploads = formData({storage:storage});

router.post("/login", uploads.none(), usersController.authenticate, usersController.respondJSON);
router.get("/logout", usersController.logout, usersController.respondJSON);
router.post("/create", uploads.single("profileImage"), usersController.new,usersController.respondJSON);
router.get("/:id", usersController.show, usersController.respondJSON);
router.put("/:id/update", uploads.single("profileImage"), usersController.update, usersController.respondJSON);
router.delete("/:id/delete", usersController.delete, usersController.respondJSON);

module.exports = router;