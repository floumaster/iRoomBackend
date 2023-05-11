const Booking = require('../models/Booking')
const { selectEntity, insertData, update } = require('../utils/utils')

class BookingRepository {

    constructor() {
        this.model = Booking
    }

    async getBookings() {
        const bookings = await selectEntity(this.model)
        return bookings
    }

    async addBooking(booking) {
        const addedBooking = await insertData(this.model, booking)
        return addedBooking
    }

    async editBooking(changes, id) {
        console.log(id, changes)
        const editedBooking = await update(this.model, changes, id)
        return editedBooking
    }
};


module.exports = BookingRepository;