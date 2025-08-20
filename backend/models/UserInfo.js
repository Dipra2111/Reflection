// models/UserInfo.js
const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  gender: String,
  profession: String,
  educationType: String,   // If profession === student
  jobField: String,        // If profession === working professional
  designation: String,     // If profession === other
  stressLevel: Number,
  twoWords: String,
  enjoyment: String,
  hasIllness: String,
  illnessDescription: String,
  reasonForJoining: String,
}, { timestamps: true });

module.exports = mongoose.model('UserInfo', userInfoSchema);
