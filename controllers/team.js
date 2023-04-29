const TeamRepository = require('../repositories/teamRepository')
const teamRepo = new TeamRepository();

module.exports = {
    async getAllTeams(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const teams = await teamRepo.getTeams()
            res.send(JSON.stringify(teams));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async addTeam(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedTeam = await teamRepo.addTeam(req.body)
            res.send(JSON.stringify(addedTeam));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
