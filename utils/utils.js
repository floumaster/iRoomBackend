const selectEntity = async (entity) => {
    const data = await entity.findAll({ raw: true })
    return data
}

const selectWithConditon = async (entity, condition) => {
    const data = await entity.findAll({ where: condition, raw: true }).catch(err => console.log(err))
    return data;
}

const insertData = async (entity, values) => {
    const data = await entity.create(values).catch(err => console.log(err))
    return data;
}

const update = async (entity, values, idnt) => {
    const data = await entity.update(values, {
        where: {
            id: idnt
        }
    })
    return data
}

module.exports = {
    selectEntity,
    selectWithConditon,
    insertData,
    update
}
