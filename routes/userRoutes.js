const router = require("express").Router();

router.get("/");
router.post("/login");
router.post("/logout");
router.post("/create");
router.put("/:id/update");
router.delete("/:id/delete");

module.exports = router;