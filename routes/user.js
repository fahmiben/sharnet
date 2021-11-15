const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerUserRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");
//router.get("/",(req, res)=>{
//res.send("hello world");
//});

// register
userRouter.post("/registerUser", registerUserRules(), validation, async (req, res) => {
  const { name, lastname, dateofbirth, email, password, phone,adress, isAdmin,userType } = req.body;
  try {
    const newUser = new User({ name, lastname,dateofbirth, email, password, phone,adress, isAdmin,userType });
    // check email existing
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email is already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;
    //generate token

    // save the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user is saved",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//login
userRouter.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await User.findOne({ email });
    // if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // cree un token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600,
    });

    // send the user
    res
      .status(200)
      .send({ searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    
    res.status(500).send({ msg: "can not get the user" });
  }
});

userRouter.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

//get all users
userRouter.get("/users",async(req,res)=>{
  try {
    const  result = await User.find();
    res.send({users:result});
  } catch (error) {
    res.send({msg : error});
  }
});

//delete user
userRouter.delete("/deleteUser/:id",async(req,res)=>{
  try {
    const result = await User.findByIdAndDelete({_id:req.params.id});
    res.send({msg : "user deleted successfully"});
  } catch (error) {
    res.send({msg : error});
  }
});

//update user
userRouter.put("/updateUser/:id",async(req,res)=>{
  try {
    const result = await User.updateOne({_id:req.params.id},{$set: {...req.body}});
    res.send({msg : "user updated successfully"});
  } catch (error) {
    res.send({msg : error});
  }
});

module.exports = userRouter;