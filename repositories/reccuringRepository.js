const Recurrings = require('../models/Recurrings')
const { selectEntity, insertData } = require('../utils/utils')

class ReccuringRepository {

    constructor() {
        this.model = Recurrings
    }

    async getRecurrings() {
        const recurrings = await selectEntity(this.model)
        return recurrings
    }

    async setRecurrings(recurrings) {
        const recurringsInsertPromises = recurrings.map(recurring => {
            return insertData(this.model, recurring)
        });
        const insertedRecurrings = await Promise.all(recurringsInsertPromises)
        return insertedRecurrings
    }
};


module.exports = ReccuringRepository;