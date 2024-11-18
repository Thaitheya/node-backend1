const express = require("express");
const router = express.Router();
const data = require("../mock_api/BookingTimes");


router.get("/times", (request, response) => {
  const bookingCounts = data.reduce((acc, booking) => {
    const { customerName } = booking;
    if (!acc[customerName]) {
      acc[customerName] = { count: 0, bookings: [] };
    }
    acc[customerName].count++;
    acc[customerName].bookings.push({
      customerName: booking.customerName,
      roomName: booking.roomName,
      startTime: booking.startTime,
      endTime: booking.endTime,
      bookingStatus: booking.bookingStatus,
    });
    return acc;
  }, {});

  response.status(200).json(bookingCounts);
});

module.exports = router;
