const express = require("express");
const router = express.Router();
const Room = require("../mock_api/RoomDetails"); 

router.get("/customers", (req, res) => {
  const { customerName, roomName, date, startTime, endTime } = req.query;

  const filteredRooms = Room.filter((room) => {
    return (
      (customerName ? room.customerName === customerName : true) &&
      (roomName ? room.roomName === roomName : true) &&
      (date ? room.date === date : true) &&
      (startTime ? room.startTime === startTime : true) &&
      (endTime ? room.endTime === endTime : true)
    );
  });

  if (filteredRooms.length === 0) {
    return res.status(404).json({ message: "No matching rooms found." });
  }

  const customerData = filteredRooms.map((room) => ({
    customerName: room.customerName,
    roomName: room.roomName,
    date: room.date,
    startTime: room.startTime,
    endTime: room.endTime,
  }));

  res.status(200).json(customerData);
});

module.exports = router;
