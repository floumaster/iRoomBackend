const TimeRepository = require('../repositories/timeRepository')
const timeRep = new TimeRepository();

module.exports = {
    async getAllTimes(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const times = await timeRep.getTimes()
            res.send(JSON.stringify(times));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async setTimes(req, res){
        res.set("Content-Type", "application/json");
        try{
            console.log(req.body)
            res.statusCode = 201
            console.log(req.body)
            const addedTimes = await timeRep.setTimes(req.body)
            res.send(JSON.stringify(addedTimes));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
