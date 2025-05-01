const multer = require("multer");
const blogschema = require("./Blogschema");

// Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Blogimages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Multer upload for multiple specific files
const upload = multer({ storage: storage }).fields([
  { name: "thumbnailimage", maxCount: 1 },
  { name: "corosal1", maxCount: 1 },
  { name: "corosal2", maxCount: 1 },
  { name: "corosal3", maxCount: 1 },
]);

const addBlogDetails = (req, res) => {
  const files = req.files;

  const blog = new blogschema({
    mainheading: req.body.mainheading,
    authorname: req.body.authorname,
    thumbnailimage: files?.thumbnailimage?.[0]?.filename || "",
    corosal1: files?.corosal1?.[0]?.filename || "",
    corosal2: files?.corosal2?.[0]?.filename || "",
    corosal3: files?.corosal3?.[0]?.filename || "",
    subheading1: req.body.subheading1,
    introduction: req.body.introduction,
    subheading2: req.body.subheading2,
    story2: req.body.story2,
    story2a: req.body.story2a,
    subheading3: req.body.subheading3,
    story3: req.body.story3,
    subheading4: req.body.subheading4,
    story4: req.body.story4,
    story4a: req.body.story4a,
  });

  blog.save()
    .then((result) => {
      res.json({ msg: "Blog saved successfully", data: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Error saving blog", error: err.message });
    });
};

module.exports = { upload, addBlogDetails };
