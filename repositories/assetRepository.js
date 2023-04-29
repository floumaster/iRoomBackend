const Asset = require('../models/Assets')
const { selectEntity, insertData } = require('../utils/utils')

class AssetRepository {

    constructor() {
        this.model = Asset
    }

    async getAssets() {
        const assets = await selectEntity(this.model)
        return assets
    }

    async addAsset(asset) {
        const insertedAsset = await insertData(this.model, asset)
        return insertedAsset
    }
};


module.exports = AssetRepository;