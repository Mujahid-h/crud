const { response, request } = require("express");
const User = require("../schema/user-schema");

// Controller for addUser API
const addUser = async (request, response) => {
  const user = request.body;
  console.log(user);

  // Making an Object of Schema and the values of Shemas are coming through request.body
  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Controller for getUser API
const getUser = async (request, response) => {
  try {
    const allUser = await User.find({}).exec();
    response.status(200).json(allUser);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Controller for loadUser API
const loadUser = async (request, response) => {
  try {
    // const loadUser = await User.find({ _id: request.params.id });
    const loadUser = await User.findById(request.params.id);
    response.status(200).json(loadUser);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Controller for editUser API
const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);

  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Controller for deleteUser API
const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(201).json({ message: "User Deleted Successfully" });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  getUser,
  loadUser,
  editUser,
  deleteUser,
};
