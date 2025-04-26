const express=require('express')
const Router = express.Router()

const Usercontrol=require("./Model/User/Usercontrol")

Router.post("/SignupDetails",Usercontrol.SignupDetails)
Router.post("/loginDetails", Usercontrol.loginDetails)
Router.post("/checkEmail", Usercontrol.checkEmail)
Router.post("/updatePassword", Usercontrol.updatePassword)




module.exports=Router