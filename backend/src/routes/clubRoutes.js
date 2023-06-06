const express = require("express");
const router = express.Router();
const { getAvailableCourts } = require("../utils/dateUtils");
const { PrismaClient } = require("../../../../prisma/client");

// GET /clubs/:clubId/available-courts endpoint
router.get("/:clubId/available-courts", async (req, res) => {
	try {
		const { clubId } = req.params;
		const { date } = req.query;

		// Retrieve the available courts for the specified club and date
		const availableCourts = await getAvailableCourts(prisma, clubId, date);

		// Send the available courts as the response
		res.json(availableCourts);
	} catch (error) {
		// Handle any errors that occur during the process
		console.error(error);
		res.status(500).json({
			error: "An error occurred while retrieving the available courts.",
		});
	}
});

module.exports = router;
