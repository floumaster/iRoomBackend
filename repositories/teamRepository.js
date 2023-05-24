const Team = require('../models/Team')
const User = require('../models/User')
const { selectEntity, insertData, update, deleteData } = require('../utils/utils')

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

    async editTeam(team) {
        const insertedTeam = await update(this.model, team, team.id)
        return insertedTeam
    }

    async deleteTeam(id) {
        await deleteData(User, {teamId: id})
        const deletedEntity = await deleteData(this.model, {id})
        return deletedEntity
    }
};


module.exports = TeamRepository;