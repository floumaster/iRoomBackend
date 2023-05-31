const express = require('express')
const cors = require('cors');
const timeRouter = require('./routes/times')
const recurringRouter = require('./routes/recurrings')
const floorRouter = require('./routes/floors')
const purposeRouter = require('./routes/purposes')
const assetRouter = require('./routes/assets')
const roomRouter = require('./routes/rooms')
const teamRouter = require('./routes/teams')
const userRouter = require('./routes/user')
const bookingRouter = require('./routes/bookings')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(cors());


app.use(bodyParser.json())
app.use('/time', timeRouter);
app.use('/recurring', recurringRouter);
app.use('/floor', floorRouter)
app.use('/purpose', purposeRouter)
app.use('/assets', assetRouter)
app.use('/room', roomRouter)
app.use('/team', teamRouter)
app.use('/user', userRouter)
app.use('/booking', bookingRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
