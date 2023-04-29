const Team = require('../models/Team')
const { selectEntity, insertData } = require('../utils/utils')

class TeamRepository {

    constructor() {
        this.model = Team
    }

    async getTeams() {
        const teams = await selectEntity(this.model)
        return teams
    }

    async addTeam(team) {
        const insertedTeam = await insertData(this.model, team)
        return insertedTeam
    }
};


module.exports = TeamRepository;