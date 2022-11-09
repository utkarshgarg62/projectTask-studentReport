const express = require("express")
const router = express.Router()
const AdminController = require("../controller/adminController")
const StudentController = require("../controller/StudentController")

router.post("/register", AdminController.Register)
router.post("/login", AdminController.Login)

router.post("/studentregister", StudentController.StudentRegister)
router.post("/studentlogin", StudentController.StudentLogin)

module.exports = router