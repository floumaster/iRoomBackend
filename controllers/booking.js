const BookingRepository = require('../repositories/bookingRepository')
const bookingRepo = new BookingRepository();

module.exports = {
    async getAllBookings(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const bookings = await bookingRepo.getBookings()
            res.send(JSON.stringify(bookings));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async addBooking(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const addedBooking = await bookingRepo.addBooking(req.body)
            res.send(JSON.stringify(addedBooking));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    },
    async editBooking(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            console.log(req.body)
            const editedBooking = await bookingRepo.editBooking(req.body, req.body.id)
            res.send(JSON.stringify(editedBooking));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify(err));
        }
    }
};
