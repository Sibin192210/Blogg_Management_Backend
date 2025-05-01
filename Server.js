const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require("cors");

require("./DbConnection");
const Router = require("./Router");

app.use(bodyparser.json());
app.use(cors());

// Serve uploaded images
app.use("/Blogimages", express.static(__dirname + "/Blogimages"));


app.use("/", Router);

app.listen(3003, function () {
  console.log('Successfully running on port 3003');
});
