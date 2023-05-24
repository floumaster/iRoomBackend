const Purpose = require('../models/Purposes')
const Booking = require('../models/Booking')
const { selectEntity, insertData, update, deleteData } = require('../utils/utils')

class PurposeRepository {

    constructor() {
        this.model = Purpose
    }

    async getPurposes() {
        const purposes = await selectEntity(this.model)
        return purposes
    }

    async addPurpose(purpose) {
        const insertedPurpose = await insertData(this.model, purpose)
        return insertedPurpose
    }

    async editPurpose(purpose) {
        const insertedPurpose = await update(this.model, purpose, purpose.id)
        return insertedPurpose
    }

    async deletePurpose(id) {
        const deletedEntity = await deleteData(this.model, {id})
        await deleteData(Booking, {purposeId: id})
        return deletedEntity
    }
};


module.exports = PurposeRepository;