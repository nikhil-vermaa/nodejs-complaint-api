const mongoose = require("mongoose")

const Complaint = new  mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        required : true,
        trim : true
    },

    title : {
        type : String,
        required : true,
        trim : true
    },

    description : {
        type : String,
        required : true,
    },

    category : {
        type : String,
        required : true
    },

    priority : {
        type : String,
        enum : ["low", "medium", "high"],
        default : "low"
    },

    status : {
        type : String,
        enum : ["pending", "in-progress", "resolved"],
        default : "pending"
    }
},
{
    timestamps : true
}
)

module.exports = mongoose.model("Complaint", Complaint)