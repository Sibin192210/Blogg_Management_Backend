const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  mainheading: { type: String, required: true },
  authorname: { type: String, required: true },
  thumbnailimage: { type: String },
  corosal1: { type: String },
  corosal2: { type: String },
  corosal3: { type: String },
  subheading1: { type: String },
  introduction: { type: String },
  subheading2: { type: String },
  story2: { type: String },
  story2a: { type: String },
  subheading3: { type: String },
  story3: { type: String },
  subheading4: { type: String },
  story4: { type: String },
  story4a: { type: String },
});

module.exports = mongoose.model("Blogdetails", blogSchema);
