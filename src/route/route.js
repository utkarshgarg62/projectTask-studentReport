const express = require("express")
const router = express.Router()
const AdminController = require("../controller/adminController")
const StudentController = require("../controller/StudentController")

router.post("/register", AdminController.Register)
router.post("/adminlogin", AdminController.Login)

router.post("/studentregister", StudentController.StudentRegister)
router.post("/studentlogin", StudentController.StudentLogin)
router.get("/report", StudentController.StudentList)
router.get("/report/:studentId", StudentController.StudentById)

module.exports = router