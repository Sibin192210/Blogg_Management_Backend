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

const loginDetails = (req, res) => {
  const { email } = req.body;

  userschema
    .findOne({ email })
    .then((user) => {
      if (!user) {
        return res.json({
          success: false,
          message: "Email not found",
          data: null,
        });
      }

      res.json({
        success: true,
        message: "User found",
        data: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    });
};


// Check if email exists
const checkEmail = (req, res) => {
  const { email } = req.body;
  userschema.findOne({ email }).then((user) => {
    if (!user) {
      return res.json({ success: false, msg: "Invalid email" });
    }
    res.json({ success: true, msg: "Email exists" });
  }).catch((err) => {
    res.status(500).json({ success: false, msg: "Server error" });
  });
};

// Update password
const updatePassword = (req, res) => {
  const { email, password } = req.body;
  userschema.findOneAndUpdate({ email }, { password }).then((result) => {
    if (!result) {
      return res.json({ success: false, msg: "Email not found" });
    }
    res.json({ success: true, msg: "Password updated" });
  }).catch((err) => {
    res.status(500).json({ success: false, msg: "Error updating password" });
  });
};

module.exports = { SignupDetails, loginDetails,checkEmail,updatePassword };
