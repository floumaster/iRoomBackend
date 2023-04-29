const express = require('express');
const roomController = require('../controllers/room');
const router = express.Router();


router
    .get("/", roomController.getAllRooms)
    .post("/addRoom", roomController.addRoom)

module.exports = router;