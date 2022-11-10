const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    physics: {
        type: String,
        trim: true,
        default: 0
    },
    chemistry: {
        type: String,
        trim: true,
        default: 0
    },
    maths: {
        type: String,
        trim: true,
        default: 0
    },
    english: {
        type: String,
        trim: true,
        default: 0
    },
    computer: {
        type: String,
        trim: true,
        default: 0
    },
    isDeleted: {
        type: Boolean,
        default: false
    }



}, { timestamps: true })

module.exports = mongoose.model("studentModel", studentSchema)