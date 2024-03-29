const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/bad-request");
const UnauthenticatedError = require("../errors/unauthenticated");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //find user by mail
  const user = await User.findOne({ email });
  //if mail doesnt exist
  if (!user) {
    throw new UnauthenticatedError("Provide Credentials");
  }
  //check password
  // const isPasswordCorrect = await user.comparePassword(password);
  //if user with such mail is not found
  // if (!isPasswordCorrect) {
  //   throw new UnauthenticatedError("Please provide valid Credentials ");
  // }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ name: user.name, token });
};

module.exports = { register, login };
