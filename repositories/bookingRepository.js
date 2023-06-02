const Booking = require('../models/Booking')
const Time = require('../models/Times')
const User = require('../models/User')
const Room = require('../models/Rooms')
const Floor = require('../models/Floors')
const Purpose = require('../models/Purposes')
const moment = require('moment');
const { selectEntity, insertData, update, selectWithConditon } = require('../utils/utils')
const sendEmails = require('../utils/emailSender')

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
        const teamId = booking.teamId;
        const users = await selectEntity(User)
        const floors = await selectEntity(Floor)
        const rooms = await selectEntity(Room)
        const purposes = await selectEntity(Purpose)
        const teamUsersEmail = users.filter(user => user.teamId === teamId).map(user => user.email)
        const bookingCreator = users.find(user => user.id === booking.userId)
        const room = rooms.find(room => room.id === booking.roomId)
        const floor = floors.find(floor => floor.id === room.floorId)
        const purpose = purposes.find(purpose => purpose.id === booking.purposeId)
        const subject = `You are invited to a meeting in the office`
        const text = `<div style="font-size: 15px"><p>Hello,</p>
        <p>${bookingCreator.name} ${bookingCreator.surname} has invited you to a <b>${booking.title}</b> | <b>${purpose.value}</b> meeting, which will take place in the conference room <b>${room.name}</b>, floor <b>${floor.name}</b>.</p>
        <p><b>Meeting date:</b> ${booking.dates.join(', ')}</p>
        <p><b>Meeting time:</b> ${booking.timeStart} - ${booking.timeEnd}</p>
        <div>Set yourself a reminder so you don't forget about this event.<br>Have a nice day!</div>
        <p><i>iRoom</i></p>
        <p><i>Room Booking Manager</i></p></div>`
        teamUsersEmail.length && await sendEmails(teamUsersEmail, subject, text)
        const addedBooking = await insertData(this.model, booking)
        return addedBooking
    }

    async editBooking(changes, id) {
        const teamId = changes.teamId;
        const users = await selectEntity(User)
        const floors = await selectEntity(Floor)
        const rooms = await selectEntity(Room)
        const purposes = await selectEntity(Purpose)
        const teamUsersEmail = users.filter(user => user.teamId === teamId).map(user => user.email)
        const room = rooms.find(room => room.id === changes.roomId)
        const bookingCreator = users.find(user => user.id === changes.userId)
        const floor = floors.find(floor => floor.id === room.floorId)
        const purpose = purposes.find(purpose => purpose.id === changes.purposeId)
        const subject = `Your office meeting has been updated`
        const text = `<div style="font-size: 15px"><p>Hello,</p>
        <p>${bookingCreator.name} ${bookingCreator.surname} updated the meeting you were invited to. You are now invited to a <b>${changes.title}</b> | <b>${purpose.value}</b> meeting, which will take place in the conference room <b>${room.name}</b>, floor <b>${floor.name}</b>.</p>
        <p><b>Meeting date:</b> ${changes.dates.join(', ')}</p>
        <p><b>Meeting time:</b> ${changes.timeStart} - ${changes.timeEnd}</p>
        <div>Set yourself a reminder so you don't forget about this event.<br>Have a nice day!</div>
        <p><i>iRoom</i></p>
        <p><i>Room Booking Manager</i></p></div>`
        teamUsersEmail.length && await sendEmails(teamUsersEmail, subject, text)
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
        const booking = body.updatedBooking
        const teamId = booking.teamId;
        const users = await selectEntity(User)
        const floors = await selectEntity(Floor)
        const rooms = await selectEntity(Room)
        const purposes = await selectEntity(Purpose)
        const teamUsersEmail = users.filter(user => user.teamId === teamId).map(user => user.email)
        const room = rooms.find(room => room.id === booking.roomId)
        const bookingCreator = users.find(user => user.id === booking.userId)
        const floor = floors.find(floor => floor.id === room.floorId)
        const purpose = purposes.find(purpose => purpose.id === booking.purposeId)
        const subject = `Your office meeting has been deleted`
        const text = `<div style="font-size: 15px"><p>Hello,</p>
        <p>${bookingCreator.name} ${bookingCreator.surname} canceled the meeting you were invited to: <b>${booking.title}</b> | <b>${purpose.value}</b>.</p><br>Have a nice day!
        <p><i>iRoom</i></p>
        <p><i>Room Booking Manager</i></p></div>`
        teamUsersEmail.length && await sendEmails(teamUsersEmail, subject, text)  
        const updatedBookings = await update(this.model, body.updatedBooking, body.updatedBooking.id)
        return updatedBookings
    }
};


module.exports = BookingRepository;