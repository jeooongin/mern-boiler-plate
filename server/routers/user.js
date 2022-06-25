const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { Counter } = require("../models/Counter");

router.post("/register", (req, res) => {
  let temp = req.body;

  Counter.findOne({ name: "counter1" }).then((doc) => {
    temp.userNum = doc.userNum;
    const userData = new User(req.body);
    userData
      .save()
      .then(() => {
        Counter.updateOne({ name: "counter1" }, { $inc: { userNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ success: false });
      });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.json({
        loginSuccess: false,
        message: "존재하지 않는 아이디입니다.",
      });
    }
    user
      .comparePassword(req.body.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 일치하지 않습니다.",
          });
        }
        user
          .generateToken()
          .then((user) => {
            res
              .cookie("x_auth", user.token)
              .status(200)
              .json({ loginSuccess: true, userId: user._id });
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      })
      .catch((err) => res.json({ loginSuccess: false, err }));
  });
});

module.exports = router;
