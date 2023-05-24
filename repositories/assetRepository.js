const Asset = require('../models/Assets')
const RoomsAssets = require('../models/RoomsAssets')
const { selectEntity, insertData, update, deleteData } = require('../utils/utils')

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

    async deleteAsset(id) {
        await deleteData(RoomsAssets, {asset_id: id})
        const deletedEntity = await deleteData(this.model, {id})
        return deletedEntity
    }

    async editAsset(asset) {
        const insertedAsset = await update(this.model, asset, asset.id)
        return insertedAsset
    }
};


module.exports = AssetRepository;