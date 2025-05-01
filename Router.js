const express = require('express');
const Router = express.Router();

const Usercontrol = require("./Model/User/Usercontrol");
const Blogcontrol = require("./Model/Blog/Blogcontrol");

Router.post("/SignupDetails", Usercontrol.SignupDetails);
Router.post("/loginDetails", Usercontrol.loginDetails);
Router.post("/checkEmail", Usercontrol.checkEmail);
Router.post("/updatePassword", Usercontrol.updatePassword);

Router.post("/addBlogDetails", Blogcontrol.upload, Blogcontrol.addBlogDetails);

module.exports = Router;
