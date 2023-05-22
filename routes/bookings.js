const express = require('express');
const bookingController = require('../controllers/booking');
const router = express.Router();


router
    .get("/", bookingController.getAllBookings)
    .post("/addBooking", bookingController.addBooking)
    .post("/getAvailableTimesInRoom", bookingController.getAvailableTimesInRoom)
    .put("/editBooking", bookingController.editBooking)
    .delete("/deleteBooking", bookingController.deleteBooking)

module.exports = router;