const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.show, usersController.respondJSON);
router.post("/login", usersController.authenticate, usersController.respondJSON);
router.get("/logout", usersController.logout, usersController.respondJSON);
router.post("/create", usersController.new,usersController.respondJSON);
router.put("/:id/update", usersController.update, usersController.respondJSON);
router.delete("/:id/delete", usersController.delete, usersController.respondJSON);

module.exports = router;