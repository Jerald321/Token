const express =require("express")
const app = express()
const mongoose =require("mongoose")
const  userRoutes =require("./routes/userroutes")

const cookieparser = require("cookie-parser")


app.use(express.json());


   
app.use(cookieparser());

app.use("/api/v1", userRoutes)

module.exports = app;