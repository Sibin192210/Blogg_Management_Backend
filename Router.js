const express=require('express')
const Router = express.Router()

const Usercontrol=require("./Model/User/Usercontrol")

Router.post("/SignupDetails",Usercontrol.SignupDetails)

//hvcdgghavd
//jbdhwbjbhjbwhdb
module.exports=Router