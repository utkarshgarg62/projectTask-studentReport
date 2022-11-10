const express = require("express")
const router = express.Router()
const AdminController = require("../controller/adminController")
const StudentController = require("../controller/StudentController")

router.post("/register", AdminController.Register)
router.post("/adminlogin", AdminController.Login)

router.post("/studentregister", StudentController.StudentRegister)
router.post("/studentlogin", StudentController.StudentLogin)
router.get("/report", StudentController.StudentList)
router.get("/reports/:studentId", StudentController.StudentById)
// router.put("/reports/:studentId", StudentController.updateMarks)
router.put("/update", StudentController.updateById)
router.delete("/delete", StudentController.deleteById)

module.exports = router