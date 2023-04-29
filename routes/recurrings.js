const express = require('express');
const recurringController = require('../controllers/recurring');
const router = express.Router();


router
    .get("/", recurringController.getAllRecurrings)
    .post("/setRecurrings", recurringController.setRecurrings)

module.exports = router;