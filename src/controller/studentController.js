const studentModel = require("../model/studentModel")
const jwt = require("jsonwebtoken")

const StudentRegister = async function (req, res) {
    try {
        let data = req.body
        let { name, email, password } = data

        if (!name) { return res.status(400).send({ status: false, message: "Please provide Name" }); }
        if (!email) { return res.status(400).send({ status: false, message: "Please provide Email" }); }
        if (!password) { return res.status(400).send({ status: false, message: "Please provide Password" }); }

        let studentData = await studentModel.create(data)
        res.status(201).send({ status: true, message: studentData })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error })
    }
}
module.exports.StudentRegister = StudentRegister


const StudentLogin = async function (req, res) {
    try {
        let data = req.body
        let { email, password } = data

        if (!email) { return res.status(400).send({ status: false, message: "Please provide email" }); }
        if (!password) { return res.status(400).send({ status: false, message: "Please provide password" }); }

        let studentDBcall = await studentModel.findOne({ $and: [{ email: email }, { password: password }] })
        if (!studentDBcall) { return res.status(400).send({ status: false, message: "Invalid email or password" }) }

        let studentId = studentDBcall._id
        let token = jwt.sign({
            studentId: studentId,
            at: Math.floor(Date.now() / 1000), //issued date
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 //expires in 24 hr 

        }, "task-project1")
        // res.cookie("jwt",token)
        res.status(200).send({ status: true, message: "Success", data: { studentId, token } });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error })
    }
}
module.exports.StudentLogin = StudentLogin

const StudentList = async (req, res) => {
    try {
        let studentList = await studentModel.find()
        if (studentList.length == 0) { return res.status(404).send({ status: false, message: "List is Empty" }) }
        res.status(200).send({ status: true, data: studentList });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error })
    }
}
module.exports.StudentList = StudentList

const StudentById = async (req, res) => {
    try {
        let studentId = req.params.studentId
        let studentData = await studentModel.findById({ _id: studentId })
        if (!studentData) { return res.status(404).send({ status: false, message: "Student Not Found" }) }
        res.status(200).send({ status: true, data: studentData });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error })
    }
}
module.exports.StudentById = StudentById