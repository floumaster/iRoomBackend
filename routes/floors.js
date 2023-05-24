const express = require('express');
const floorController = require('../controllers/floor');
const router = express.Router();


router
    .get("/", floorController.getAllFloors)
    .post("/addFloor", floorController.addFloor)
    .put("/editFloor", floorController.editFloor)
    .delete("/deleteFloor", floorController.deleteFloor)

module.exports = router;