const express = require("express");
const router = express.Router();
const clubController = require("../controllers/clubController");

// Route to get available courts for a specific club on a specific day
router.get("/:clubId/available-courts/:day", clubController.getAvailableCourts);

module.exports = router;
