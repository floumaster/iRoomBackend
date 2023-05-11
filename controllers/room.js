const RoomRepository = require('../repositories/roomRepository')
const roomRepo = new RoomRepository();

module.exports = {
    async getAllRooms(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const rooms = await roomRepo.getRooms()
            res.send(JSON.stringify(rooms));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async addRoom(req, res){
        res.set("Content-Type", "application/json");
        try{
            console.log(req.body)
            res.statusCode = 201
            const addedRoom = await roomRepo.addRoom(req.body.room, req.body.assetsIds)
            res.send(JSON.stringify(addedRoom));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
