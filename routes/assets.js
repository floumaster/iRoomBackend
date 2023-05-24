const express = require('express');
const assetController = require('../controllers/asset');
const router = express.Router();


router
    .get("/", assetController.getAllAssets)
    .post("/addAsset", assetController.addAsset)
    .put("/editAsset", assetController.editAsset)
    .delete("/deleteAsset", assetController.deleteAsset)

module.exports = router;