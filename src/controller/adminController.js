const adminModel = require("../model/adminModel")
const studentModel = require("../model/studentModel")
const jwt = require("jsonwebtoken")

const Register = async function (req, res) {
    try {
        let data = req.body
        let createdData = await adminModel.create(data)
        res.status(201).send({ status: true, message: createdData })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error })
    }
}
module.exports.Register = Register


const Login = async function (req, res) {
    try {
        let data = req.body
        let { email, password } = data

        if (!email) return res.status(400).send({ status: false, message: "Please provide email" });
        if (!password) return res.status(400).send({ status: false, message: "Please provide password" });

        let output = await adminModel.findOne({ $and: [{ email: email }, { password: password }] })
        if (!output) return res.status(401).send({ status: false, message: "Invalid email or password" })

        let adminId = output._id
        let token = jwt.sign({
            adminId: adminId,
            at: Math.floor(Date.now() / 1000), //issued date
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 //expires in 24 hr 

        }, "task-project1")
        res.status(200).send({ status: true, message: "Success", data: { adminId, token } });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error })
    }
}
module.exports.Login = Login



const addSubjectMarks = async function (req, res) {
    try {
        let data = req.body
        let { name, subjectName, marks } = data

        let checkStudent = studentModel.findOne({ name: name })
        if (!checkStudent) return res.status(401).send({ status: false, message: "Student Not Found" })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error })
    }
}
module.exports.addSubjectMarks = addSubjectMarks