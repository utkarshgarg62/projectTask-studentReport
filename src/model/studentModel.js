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
    subject: {
        subjectName: {
            type: String,
            trim: true
        },
        marks: {
            type: Number,
            trim: true
        }

    }


}, { timestamps: true })

module.exports = mongoose.model("studentModel", studentSchema)