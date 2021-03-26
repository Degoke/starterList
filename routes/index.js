const router = require("express").Router();
const userRoutes = require("./userRoutes");
const startupRoutes = require("./startupRoutes");

router.use("/api/startups",startupRoutes);
router.use("/api/users",userRoutes);

module.exports = router;