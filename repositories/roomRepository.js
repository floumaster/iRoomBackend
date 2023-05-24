const Room = require('../models/Rooms')
const RoomsAssets = require('../models/RoomsAssets')
const Booking = require('../models/Booking')
const { selectEntity, insertData, selectWithConditon, update, deleteData } = require('../utils/utils')

class RoomRepository {

    constructor() {
        this.model = Room
    }

    async getRooms() {
        const rooms = await selectEntity(this.model)
        const roomsAssetsPromises = rooms.map(room => {
            return selectWithConditon(RoomsAssets, {
                room_id: room.id,
            })
        })
        const roomsAssets = await Promise.all(roomsAssetsPromises)
        const fullfilledRoomsAssets = roomsAssets.filter(asset => asset.length)
        const roomsWithAssets = rooms.map(room => {
            return {
                ...room,
                assetsIds: fullfilledRoomsAssets
                .find(roomAsset => {
                    return roomAsset[0].room_id === room.id
                })?.map(entity => entity.asset_id) || []
            }
        })
        const roomsWithBookingsPromises = roomsWithAssets.map(room => {
            return selectWithConditon(Booking, {
                roomId: room.id,
            }).then(data => {
                return {
                    ...room,
                    bookingsIds: data.map(booking => booking.id)
                }
            })
        })
        const roomsWithBookings = await Promise.all(roomsWithBookingsPromises)
        return roomsWithBookings
    }

    async addRoom(room, assetsIds) {
        const insertedRoom = await insertData(this.model, room)
        const assetsIdsPromises = assetsIds.map(id => {
            return insertData(RoomsAssets, {
                room_id: room.id,
                asset_id: id
            })
        })
        const assetIds = await Promise.all(assetsIdsPromises)
        return {
            ...insertedRoom.dataValues,
            assetsIds: assetIds
        }
    }

    async deleteRoom(id) {
        await deleteData(RoomsAssets, {room_id: id})
        await deleteData(Booking, {roomId: id})
        const deletedEntity = await deleteData(this.model, {id})
        return deletedEntity
    }

    async editRoom(room, assetsIds) {
        const insertedRoom = await update(this.model, room, room.id)
        const deleteAssetsIdsPromises = await deleteData(RoomsAssets, {room_id: room.id})
        const assetsIdsPromises = assetsIds.map(id => {
            return insertData(RoomsAssets, {
                room_id: room.id,
                asset_id: id
            })
        })
        const assetIds = await Promise.all(assetsIdsPromises)
        return true
    }
};


module.exports = RoomRepository;