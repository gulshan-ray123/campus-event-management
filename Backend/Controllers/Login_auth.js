const userModel = require("../Models/userRegistraion");
const organiserModel= require('../Models/OrganiserRegistration');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const Login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const User = await userModel.findOne({ $or:[
      {
         email:identifier,
      },{
          username:identifier,
      }
    ] });


    if (!User) {
      return res.status(400).json({ msg: "User not found" }); 
    }

    const isMatch = await bcrypt.compare(password, User.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" }); 
    }

    const email=User.email;

    const token = jwt.sign({ email }, jwtSecretKey, { expiresIn: "14d" });

    res.cookie("token", token, {
      expires: new Date(Date.now() + 1209600000), // 14 days
      httpOnly: true,
    });

    return res.status(200).json({ msg: "User successfully logged in", token }); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = Login;