const Booking = require('../models/Booking')
const Time = require('../models/Times')
const moment = require('moment');
const { selectEntity, insertData, update, selectWithConditon } = require('../utils/utils')

const minutes = ['00', 15, 30, 45]

const checkTimeAndDateForBooking = (time, date, bookings) => {
    const formatedCurrentDate = date.format('YYYY-MM-DD')
    const formatedTime = moment(`${formatedCurrentDate}T${time}`)
    let _booking = null
    bookings.forEach(booking => {
        booking.dates.forEach(date => {
            const dateStart = moment(`${date}T${booking.timeStart}`)
            const dateEnd = moment(`${date}T${booking.timeEnd}`)
            if(dateStart <= formatedTime && formatedTime < dateEnd){
                _booking = booking
                return _booking
            }
        })
    })
    return _booking
}

const checkDayForBusiness = (day, bookingsInCurrentRoom, times) => {
    let availableTimesNumber = 0
    times.forEach(time => {
        minutes.forEach(subTime => {
            const formatedTime = `${time.title}:${subTime}`
            const booking = checkTimeAndDateForBooking(formatedTime, day, bookingsInCurrentRoom)
            if(!booking){
                availableTimesNumber++
            }
        })
    })
    return availableTimesNumber
}

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
        const editedBooking = await update(this.model, changes, id)
        return editedBooking
    }

    async getAvailableTimesInRoom({roomId, days}) {
        const bookings = await this.getBookings()
        const bookingsInCurrentRoom = bookings.filter(booking => booking.roomId === roomId)
        let times = await selectEntity(Time)
        times = times.sort((time1, time2) => time1.time - time2.time)
        const result = {}
        for(let i = 0; i < days.length; i++){
            const dayInfo = await checkDayForBusiness(moment(days[i]), bookingsInCurrentRoom, times)
            result[days[i]] = dayInfo
        }
        return result
    }

    async deleteBookingById(body) {
        console.log(body)
        const updatedBookings = await update(this.model, body.updatedBooking, body.updatedBooking.id)
        console.log(updatedBookings)
        return updatedBookings
    }
};


module.exports = BookingRepository;