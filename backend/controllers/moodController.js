const Mood = require("../models/Mood.js");

// Add a new mood
const addMood = async (req, res) => {
  try {
    const { userId, mood, note } = req.body;

    if (!userId || !mood) {
      return res.status(400).json({ message: "User ID and mood are required" });
    }

    const newMood = new Mood({
      userId,
      mood,
      note,
    });

    await newMood.save();

    res.status(201).json({
      message: "Mood added successfully",
      mood: newMood,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding mood", error: error.message });
  }
};

// Get all moods of a user
const getUserMoods = async (req, res) => {
  try {
    const { userId } = req.params;

    const moods = await Mood.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(moods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching moods", error: error.message });
  }
};

// Get latest mood of a user
const getLatestMood = async (req, res) => {
  try {
    const { userId } = req.params;

    const latestMood = await Mood.findOne({ userId }).sort({ createdAt: -1 });

    if (!latestMood) {
      return res.status(404).json({ message: "No moods found for this user" });
    }

    res.status(200).json(latestMood);
  } catch (error) {
    res.status(500).json({ message: "Error fetching latest mood", error: error.message });
  }
};

module.exports = { addMood, getUserMoods, getLatestMood };
