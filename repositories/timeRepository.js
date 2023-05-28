const Time = require('../models/Times')
const { selectEntity, insertData, deleteData, deleteDataWithTrancate } = require('../utils/utils')

class TimeRepository {

    constructor() {
        this.model = Time
    }

    async getTimes() {
        const times = await selectEntity(this.model)
        return times.sort((time1, time2) => time1.time - time2.time)
    }

    async setTimes(times) {
        await deleteDataWithTrancate(this.model)
        const timeInsertPromises = times.map(time => {
            return insertData(this.model, time)
        });
        const insertedTimes = await Promise.all(timeInsertPromises)
        return insertedTimes
    }
};


module.exports = TimeRepository;