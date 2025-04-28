const multer = require('multer');
const Blog = require('./Blogschema');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Blog_images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const uploadFields = upload.fields([
    { name: 'thumbnailimage', maxCount: 1 },
    { name: 'corosal1', maxCount: 1 },
    { name: 'corosal2', maxCount: 1 },
    { name: 'corosal3', maxCount: 1 }
]);

const addBlogDetails = (req, res) => {
    const blog = new Blog({
        mainheading: req.body.mainheading,
        authorname: req.body.authorname,
        thumbnailimage: req.files.thumbnailimage,
        subheading1: req.body.subheading1,
        introduction: req.body.introduction,
        subheading2: req.body.subheading2,
        story2: req.body.story2,
        story2a: req.body.story2a,
        corosal1: req.files.corosal1,
        corosal2: req.files.corosal2,
        corosal3: req.files.corosal3,
        subheading3: req.body.subheading3,
        story3: req.body.story3,
        subheading4: req.body.subheading4,
        story4: req.body.story4,
        story4a: req.body.story4a
    });

    blog.save()
        .then(result => {
            res.json({
                msg: "Blog details saved successfully",
                data: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                msg: "Something went wrong",
                error: err.message
            });
        });
};

module.exports = { upload: uploadFields, addBlogDetails };
