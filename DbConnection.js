const mongoose = require("mongoose"); //mongoose is used for connection between server and db.it is a middleware
mongoose.connect("mongodb://127.0.0.1/TravellersData"); //the name backend2 is folder name of db.it automatically create
var db = mongoose.connection;
db.on("error", console.error.bind("error"));
db.once("open", function () {
  console.log("connection successfull");
});
module.export = db;
