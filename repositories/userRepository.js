const User = require('../models/User')
const Team = require('../models/Team')
const Booking = require('../models/Booking')
const { selectEntity, insertData, selectWithConditon, update, deleteData, deleteDataWithTrancate } = require('../utils/utils')
var md5 = require('md5');

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

    async deleteUser(id) {
        await deleteData(Booking, {userId: id})
        const deletedEntity = await deleteData(this.model, {id})
        return deletedEntity
    }

    async setUsers(users) {
        await deleteDataWithTrancate(this.model)
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

    async editUser(user) {
        const updtedUser = await update(this.model, {
            ...user,
            teamId: user.businessUnitId
        }, user.id)
        return updtedUser
    }

    async login(email, password) {
        const searchedUser = await selectWithConditon(this.model, {
            email,
            password:  md5(password)
        })
        if(searchedUser.length === 0)
            throw new Error('Invalid credentials')
        else
            return searchedUser[0]
    }

    async register(userInfo){
        const users = await selectEntity(this.model)
        const registeredUser = users.find(user => user.email === userInfo.email)
        if(!registeredUser)
            throw new Error('No user with such email in the system')
        else{
            await update(this.model, {...userInfo, password: md5(userInfo.password)}, registeredUser.id)
            const usersUpdated = await selectEntity(this.model)
            const user = usersUpdated.find(user => user.email === userInfo.email)
            return user
        }
    }
};


module.exports = UserRepository;