const express = require('express');
const teamController = require('../controllers/team');
const router = express.Router();


router
    .get("/", teamController.getAllTeams)
    .post("/addTeam", teamController.addTeam)

module.exports = router;