const PurposeRepository = require('../repositories/purposeRepository')
const purposeRepo = new PurposeRepository();

module.exports = {
    async getAllPurposes(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const purposes = await purposeRepo.getPurposes()
            res.send(JSON.stringify(purposes));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async addPurpose(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedPurpose = await purposeRepo.addPurpose(req.body)
            res.send(JSON.stringify(addedPurpose));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async editPurpose(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedPurpose = await purposeRepo.editPurpose(req.body)
            res.send(JSON.stringify(addedPurpose));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async deletePurpose(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const deletedPurpose = await purposeRepo.deletePurpose(req.body.id)
            res.send(JSON.stringify(deletedPurpose));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
