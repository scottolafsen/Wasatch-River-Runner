const router = require("express").Router();
const eventRoutes = require("./books");

// Book routes
router.use("/events", eventRoutes);

module.exports = router;
