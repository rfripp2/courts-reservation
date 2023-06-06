const express = require("express");
const router = express.Router();

// Import your route handlers
const clubRoutes = require("./clubRoutes");

// Register route handlers
router.use("/clubs", clubRoutes);

module.exports = router;
