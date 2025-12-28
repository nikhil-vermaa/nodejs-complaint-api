const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/database")
const complaintRoute = require("./routes/compliantRoute")
const errorMiddleware = require("./middleware/errorMiddleware")
const notFoundMiddleware = require("./middleware/notFoundMiddleware")


dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.use("/api/v1/complaints", complaintRoute)

app.use(errorMiddleware)

app.use(notFoundMiddleware)

module.exports = app

