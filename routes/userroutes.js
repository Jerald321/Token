const express =require("express")

const route =express.Router();
 const  logincontroller =require("../controller/logincontroller");
const  auth  = require("../utils/auth");

route.post("/register", logincontroller.register)
route.get("/admin", logincontroller.admin)
route.post("/login", logincontroller.login)
route.post("/logout", logincontroller.logout)
route.post("/forgetpassword", logincontroller.forgetpassword)
route.post("/setNewPassword", logincontroller.setNewPassword)


route.get("/me" ,  auth.authverify, logincontroller.me)
module.exports = route;


