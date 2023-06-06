// Helper function to get available time slots
function getAvailableTimeSlots(businessHour, reservations) {
	const { openingTime, closingTime } = businessHour;
	const timeSlots = generateTimeSlots(openingTime, closingTime);

	const bookedTimeSlots = reservations.map((reservation) => ({
		startTime: reservation.startTime,
		endTime: reservation.endTime,
	}));

	const availableTimeSlots = timeSlots.filter((timeSlot) =>
		isTimeSlotAvailable(timeSlot, bookedTimeSlots)
	);

	return availableTimeSlots;
}

// Helper function to generate an array of time slots between opening and closing times
function generateTimeSlots(openingTime, closingTime) {
	const timeSlots = [];
	let currentTime = new Date(openingTime);

	while (currentTime < new Date(closingTime)) {
		const startTime = new Date(currentTime);
		const endTime = new Date(
			currentTime.setMinutes(currentTime.getMinutes() + 30)
		);

		timeSlots.push({
			startTime,
			endTime,
		});
	}

	return timeSlots;
}

// Helper function to check if a time slot is available
function isTimeSlotAvailable(timeSlot, bookedTimeSlots) {
	for (const bookedSlot of bookedTimeSlots) {
		if (isOverlap(timeSlot, bookedSlot)) {
			return false;
		}
	}

	return true;
}

// Helper function to check if two time slots overlap
function isOverlap(timeSlot1, timeSlot2) {
	const startTime1 = timeSlot1.startTime.getTime();
	const endTime1 = timeSlot1.endTime.getTime();
	const startTime2 = timeSlot2.startTime.getTime();
	const endTime2 = timeSlot2.endTime.getTime();

	return startTime1 < endTime2 && endTime1 > startTime2;
}

module.exports = {
	getAvailableTimeSlots,
};
