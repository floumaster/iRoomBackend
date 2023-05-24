const Floor = require('../models/Floors')
const Room = require('../models/Rooms')
const RoomsAssets = require('../models/RoomsAssets')
const Booking = require('../models/Booking')
const { selectEntity, insertData, selectWithConditon, update, deleteData } = require('../utils/utils')

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

    async deleteFloor(id) {
        const roomsToDelete = await selectWithConditon(Room, {floorId: id})
        const trashPromises = roomsToDelete.map(room => {
            return Promise.all([
                deleteData(RoomsAssets, {room_id: room.id}),
                deleteData(Booking, {roomId: room.id}),
                deleteData(Room, {id: room.id})
            ])
        })
        await Promise.all(trashPromises)
        const deletedEntity = await deleteData(this.model, {id})
        return deletedEntity
    }

    async editFloor(floor) {
        const updatedFloor = await update(this.model, floor, floor.id)
        return updatedFloor
    }
};


module.exports = FloorRepository;