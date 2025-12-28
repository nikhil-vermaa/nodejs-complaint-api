const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connected Successfully!!!")
    }
    catch(error){
        console.error("Database connection failed")
        process.exit(1)
    }
}

module.exports = connectDB