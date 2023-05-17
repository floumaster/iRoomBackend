const UserRepository = require('../repositories/userRepository')
const userRepo = new UserRepository();

module.exports = {
    async getAllUsers(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const users = await userRepo.getAllUsers()
            res.send(JSON.stringify(users));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async addUsers(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedUsers = await userRepo.addUsers(req.body)
            res.send(JSON.stringify(addedUsers));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async login(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const user = await userRepo.login(req.body.email, req.body.password)
            res.send(JSON.stringify(user));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify({error: err.message}));
        }
    },
    async register(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const user = await userRepo.register(req.body)
            res.send(JSON.stringify(user));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify({error: err.message}));
        }
    }
};
