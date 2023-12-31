const Staff = require("../models/staffModel");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

/**
 * @desc Get all staff
 * @route GET /api/staff
 * @return array of staff as response object
 */
const getStaff = async (req, res) => {
  const staff = await Staff.find();
  res.status(200).json({"data": staff});
};

/**
 * @desc Create a new staff
 * @route POST /api/staff
 * @return array of staff as response object
 */
const createStaff = async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone, staffid, specialty, password } = req.body;
  const designation = "teacher";
  try {
    if (!name || !email || !phone || !specialty || !staffid || !password) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
  
    const staff = await Staff.create({
      name,
      email,
      phone,
      specialty,
      staffid,
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: name,
      email,
      password: hashedPassword,
      designation
    });

    console.log(`User created ${user}`);
    res.status(201).json({"data": staff});
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};


/**
 * @desc Make a staff an admin
 * @route PUT /api/admin
 * @return array of staff as response object
 */
const changeDesignation = async (req, res) => {
  console.log("The request body is :", req.body);
  const { email, designation } = req.body;
  const updatedData = { designation }
  try {
    const staff = await User.findOneAndUpdate({ email }, updatedData, {new: true});
    
    if (staff) {
      res.status(201).json(staff);
    } else {
      res.status(404);
      throw new Error(`teacher with email ${email} not found`);

    }
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};


module.exports = {
    getStaff,
    createStaff,
  };