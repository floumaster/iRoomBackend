const express = require('express');
const purposeController = require('../controllers/purpose');
const router = express.Router();


router
    .get("/", purposeController.getAllPurposes)
    .post("/addPurpose", purposeController.addPurpose)

module.exports = router;