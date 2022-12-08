const express = require("express");
const userRouter = express.Router();
const users = require("../userList")

userRouter.get("/login", (req, res) =>
  res.send({
    listusers: users,
  })
);

userRouter.post("/email", (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    res.send({
      msg: `your email is ${email} and your password is ${password}`
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/", (req, res) => {
  const date = new Date();
  const hours = date.getHours();
  if (hours > 8 && hours < 18) {
    res.render("opened");
  } else {
    res.render("closed");
  }
});

module.exports = userRouter;

