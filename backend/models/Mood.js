const mongoose = require("mongoose");
const moodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // reference to the User model
    required: true,
  },
  mood: {
    type: String,
    required: true,
    enum: ["happy", "sad", "neutral", "angry", "anxious", "excited"], // example moods
  },
  note: {
    type: String, // optional description of mood
  },
}, { timestamps: true });

module.exports = mongoose.model("Mood", moodSchema);
