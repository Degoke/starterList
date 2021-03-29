const router = require("express").Router();
const userRoutes = require("./userRoutes");
const startupRoutes = require("./startupRoutes");
const errorRoutes = require("./errorRoutes");

router.use("/api/startups",startupRoutes);
router.use("/api/users",userRoutes);
router.use("/",errorRoutes);

module.exports = router;