const express = require("express");
const createRoom = (data) => {
  const router = express.Router();
  router.use(express.json());
  router.post("/addRoom", (request, response) => {
    const {
      id,
      "no of seats": noOfSeats,
      "Amenities in room": amenitiesInRooms,
      "Price per hour": pricePerHour,
    } = request.body;
    const roomId = data.find((rooms) => rooms.id === id);
    if (!id || !noOfSeats || !amenitiesInRooms || !pricePerHour) {
      return response.status(400).json({ error: "All fields are required" });
    }
    if (roomId) {
      return response.status(400).json({ error: "Room already exists" });
    }
    const roomDetails = {
      id,
      noOfSeats,
      amenitiesInRooms,
      pricePerHour,
    };
    data.push(roomDetails);
    response
      .status(201)
      .json({ message: "Room added successfully", roomDetails });
  });

    router.get("/allrooms", (req, res) => {
      if (data.length === 0) {
        return res.status(200).json({ message: "No bookings available" });
      }
      res.status(200).json({ bookings: data });
    });

  return router;
};

module.exports = createRoom;
