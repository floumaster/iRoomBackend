const FloorRepository = require('../repositories/floorRepository')
const floorRepo = new FloorRepository();

module.exports = {
    async getAllFloors(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const floors = await floorRepo.getFloors()
            res.send(JSON.stringify(floors));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async addFloor(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedFloor = await floorRepo.addFloor(req.body)
            res.send(JSON.stringify(addedFloor));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async editFloor(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const editedFloor = await floorRepo.editFloor(req.body)
            res.send(JSON.stringify(editedFloor));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async deleteFloor(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const deletedFloor = await floorRepo.deleteFloor(req.body.id)
            res.send(JSON.stringify(deletedFloor));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
