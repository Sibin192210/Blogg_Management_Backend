const userschema = require("./Userschema");

const SignupDetails = (req, res) => {
  let users = new userschema({
    email: req.body.email,
    password: req.body.password,
  });
  users
    .save()
    .then((result) => {
      res.json({
        msg: " User details saved",
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.code == 11000) {
        res.json({
          status: 404,
          msg: "This email is already exist",
        });
      } else {
        res.json({
          msg: "error",
        });
      }
    });
};

module.exports={SignupDetails}