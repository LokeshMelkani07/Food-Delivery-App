const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Signup Route

router.post(
  "/createUser",
  body("name", "Invalid Username").isLength({ min: 3 }),
  body("email", "Invalid Email ID").isEmail(),
  body("password", "Invalid Password").isLength({ min: 5 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
          message: errors.msg,
        });
      }
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Sorry, User with same email already exits",
        });
      }
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password,
      });

      res.json({ success: true });
    } catch (error) {
      console.log("error ", error);
      res.json({ success: false });
    }
  }
);

// Login Route

router.post(
  "/loginUser",
  body("email", "Invalid Email ID").isEmail(),
  async (req, res) => {
    const { email, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ success: false, errors: "Incorrect Credentials" });
      }

      if (password !== userData.password) {
        return res
          .status(400)
          .json({ success: false, errors: "Incorrect Credentials" });
      }

      res.json({ success: true, Data: userData });
    } catch (error) {
      console.log("error ", error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
