const bcrypt = require("bcrypt");
const { auth } = require("../model");
const { Op } = require('sequelize');

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "password is required",
      });
    }
    const hashpassword = await bcrypt.hash(password, 8);

    // const registerUser = new auth({ email, password: hashpassword });
    // await registerUser.save();
    await auth.create({ email, password: hashpassword });

    res.status(200).json({
      success: true,
      message: "register user successful",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "error while creating",
      exception: `${error}`,
    });
  }
};
