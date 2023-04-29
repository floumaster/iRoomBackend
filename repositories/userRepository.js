const User = require('../models/User')
const Team = require('../models/Team')
const { selectEntity, insertData, selectWithConditon } = require('../utils/utils')

class UserRepository {

    constructor() {
        this.model = User
    }

    async getAllUsers() {
        const users = await selectEntity(this.model)
        return users.map(user => {
            return {
                ...user,
                businessUnitId: user.teamId
            }
        })
    }

    async addUsers(users) {
        const addedUserPromises = users.map(user => {
            return insertData(this.model, user)
        })
        const addedUser = await Promise.all(addedUserPromises)
        return addedUser.map(user => {
            return {
                ...user,
                businessUnitId: user.teamId
            }
        })
    }

    async login(email, password) {
        const searchedUser = await selectWithConditon(this.model, {
            email,
            password
        })
        if(searchedUser.length === 0)
            throw new Error('Invalid credentials')
        else
            return searchedUser[0]
    }
};


module.exports = UserRepository;