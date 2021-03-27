const router = require("express").Router();
const errorController = require("../controllers/errorController");

router.use(errorController.resNoResourceFound);
router.use(errorController.resInternalServerError);

module.exports = router;