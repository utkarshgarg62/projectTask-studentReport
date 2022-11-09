const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const route = require("./route/route")
const PORT = process.env.PORT || 5000
const cors = require("cors")


const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://functionup-radon-cohort:radon123@cluster0.zbsotuc.mongodb.net/task-project1", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB connected SuccessFully"))
    .catch((error) => console.log(error))


// Application Level Middleware
app.use("/test", (req, res) => {
    res.send({ msg: "Hello Welcome" })
})

// Route Level Middleware
app.use("/", route)

app.listen(PORT, function () {
    console.log("Expess running on port - " + PORT)
})