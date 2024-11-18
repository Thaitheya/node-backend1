const express = require("express");
const router = express.Router();
const booking = require('../mock_api/RoomDetails')

router.get("/availability", (req, res) => {
     res.status(200).json(booking);
});

module.exports = router;
