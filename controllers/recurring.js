const RecurringRepository = require('../repositories/reccuringRepository')
const recurringRep = new RecurringRepository();

module.exports = {
    async getAllRecurrings(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const recurrings = await recurringRep.getRecurrings()
            res.send(JSON.stringify(recurrings));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async setRecurrings(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedRecurrings = await recurringRep.setRecurrings(req.body)
            res.send(JSON.stringify(addedRecurrings));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
