const prisma = require("../prisma-client");
const {
	getAvailableTimeSlots,
	isCourtAvailable,
} = require("../utils/dateUtils");

// Controller function to get available courts for a specific club on a specific day
async function getAvailableCourts(req, res) {
	try {
		// Parse request parameters
		const { clubId, day } = req.params;

		// Query the database using Prisma and perform necessary operations

		// Return the response
		res.json({ availableCourts });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred" });
	}
}

module.exports = {
	getAvailableCourts,
};
