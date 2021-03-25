const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");

router.use("/api/project",projectRoutes);
router.use("/api/users",userRoutes);

module.exports = router;