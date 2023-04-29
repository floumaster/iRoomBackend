const express = require('express');
const timeController = require('../controllers/time');
const router = express.Router();


router
    .get("/", timeController.getAllTimes)
    .post("/setTimes", timeController.setTimes)

module.exports = router;