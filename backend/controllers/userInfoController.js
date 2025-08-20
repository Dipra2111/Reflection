// controllers/userInfoController.js
const UserInfo = require('../models/UserInfo');

exports.saveUserInfo = async (req, res) => {
  const {
    userId,
    gender,
    profession,
    educationType,
    jobField,
    designation,
    stressLevel,
    twoWords,
    enjoyment,
    hasIllness,
    illnessDescription,
    reasonForJoining,
  } = req.body;

  try {
    // Optional: prevent duplicates for same user
    const existing = await UserInfo.findOne({ userId });
    if (existing) {
      return res.status(400).json({ message: "User info already exists." });
    }

    const userInfo = new UserInfo({
      userId,
      gender,
      profession,
      educationType,
      jobField,
      designation,
      stressLevel,
      twoWords,
      enjoyment,
      hasIllness,
      illnessDescription,
      reasonForJoining,
    });

    await userInfo.save();
    res.status(201).json({ message: "User info saved successfully", data: userInfo });
  } catch (error) {
    console.error("Error saving user info:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
