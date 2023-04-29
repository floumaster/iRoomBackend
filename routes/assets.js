const express = require('express');
const assetController = require('../controllers/asset');
const router = express.Router();


router
    .get("/", assetController.getAllAssets)
    .post("/addAsset", assetController.addAsset)

module.exports = router;