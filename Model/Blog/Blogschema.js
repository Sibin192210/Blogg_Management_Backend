// blogSchema.js
const mongoose = require('mongoose');

// Define your blog schema
const blogSchema = new mongoose.Schema({
    mainheading: {
        type: String,
        required: true
    },
    authorname: {
        type: String,
        required: true
    },
    thumbnailimage: {
        type: Object,
    },
    subheading1: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    subheading2: {
        type: String,
        required: true
    },
    story2: {
        type: String,
        required: true
    },
    story2a: {
        type: String,
        required: true
    },
    corosal1: {
        type: Object,
    },
    corosal2: {
        type: Object,
    },
    corosal3: {
        type: Object,
    },
    subheading3: {
        type: String,
        required: true
    },
    story3: {
        type: String,
        required: true
    },
    subheading4: {
        type: String,
        required: true
    },
    story4: {
        type: String,
        required: true
    },
    story4a: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model("Blogdetails", blogSchema);
