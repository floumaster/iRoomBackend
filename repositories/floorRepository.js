const Floor = require('../models/Floors')
const Room = require('../models/Rooms')
const { selectEntity, insertData, selectWithConditon } = require('../utils/utils')

class FloorRepository {

    constructor() {
        this.model = Floor
    }

    async getFloors() {
        const floors = await selectEntity(this.model)
        const floorsWithRoomsPromises = floors.map(floor => {
            return selectWithConditon(Room, {
                floorId: floor.id
            }).then(rooms => {
                return {
                    ...floor,
                    roomsIds: rooms.map(room => room.id)
                }
            })
        })
        const floorsWithRooms = await Promise.all(floorsWithRoomsPromises)
        return floorsWithRooms
    }

    async addFloor(floor) {
        const insertedFloor = await insertData(this.model, floor)
        return insertedFloor
    }
};


module.exports = FloorRepository;