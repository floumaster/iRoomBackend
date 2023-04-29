const Time = require('../models/Times')
const { selectEntity, insertData } = require('../utils/utils')

class TimeRepository {

    constructor() {
        this.model = Time
    }

    async getTimes() {
        const times = await selectEntity(this.model)
        return times.sort((time1, time2) => time1.time - time2.time)
    }

    async setTimes(times) {
        const timeInsertPromises = times.map(time => {
            return insertData(this.model, time)
        });
        const insertedTimes = await Promise.all(timeInsertPromises)
        return insertedTimes
    }
};


module.exports = TimeRepository;