const AssetRepository = require('../repositories/assetRepository')
const assetRepo = new AssetRepository();

module.exports = {
    async getAllAssets(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const assets = await assetRepo.getAssets()
            res.send(JSON.stringify(assets));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async addAsset(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedAsset = await assetRepo.addAsset(req.body)
            res.send(JSON.stringify(addedAsset));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async editAsset(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            console.log(req.body)
            const addedAsset = await assetRepo.editAsset(req.body)
            res.send(JSON.stringify(addedAsset));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async deleteAsset(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const deletedAsset = await assetRepo.deleteAsset(req.body.id)
            res.send(JSON.stringify(deletedAsset));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
