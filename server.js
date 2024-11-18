const express = require("express");
const createRoom = require("./rooms/Room.controller");
const book = require("./rooms/Booking.controller");
const availability = require("./rooms/Book.controller");
const data = require("./mock_api/RoomDetails");
const customer = require('./rooms/customer.controller')
const times = require('./rooms/BookingDetails.controller')
const app = express();


app.use(express.json());


app.use("/rooms", createRoom);
app.use("/bookings", book);
app.use("/availability", availability); 
app.use('/customer', customer)
app.use('/',times)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
