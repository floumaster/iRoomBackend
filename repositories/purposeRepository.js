const Purpose = require('../models/Purposes')
const { selectEntity, insertData } = require('../utils/utils')

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
};


module.exports = PurposeRepository;