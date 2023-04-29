const express = require('express');
const bookingController = require('../controllers/booking');
const router = express.Router();


router
    .get("/", bookingController.getAllBookings)
    .post("/addBooking", bookingController.addBooking)
    .put("/editBooking", bookingController.editBooking)

module.exports = router;