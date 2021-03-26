const router = require("express").Router();

router.get("/");
router.post("/create");
router.put("/:id/update");
router.delete("/:id/delete");

module.exports = router;