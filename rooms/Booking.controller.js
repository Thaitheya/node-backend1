const express = require("express");

module.exports = (data) => {
  const router = express.Router();
  router.post("/book", (req, res) => {
    const { roomId, customerName, date, startTime, endTime } = req.body;

    if (!roomId || !customerName || !date || !startTime || !endTime) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const isBooked = data.find(
      (booking) =>
        booking.roomId === roomId &&
        ((startTime >= booking.startTime && startTime <= booking.endTime) ||
          (endTime >= booking.startTime && endTime <= booking.endTime))
    );

    if (isBooked) {
      return res.status(400).json({ message: "Room already booked" });
    }

    const newBooking = { roomId, customerName, date, startTime, endTime };
    data.push(newBooking);

    return res
      .status(201)
      .json({ message: "Room booked successfully", booking: newBooking });
  });
  
   router.get("/book", (request, response) => {
    if (data.length > 0) {
      response.status(200).json({ data });
    } else {
      response.status(400).json({ message: "No records found" });
    }
   });
  return router;
};
