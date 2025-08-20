const express = require('express');
const { addMood, getUserMoods, getLatestMood } = require('../controllers/moodController.js');

const router = express.Router();

// Add mood
router.post("/", addMood);

// Get latest mood for a user
router.get("/:userId/latest", getLatestMood);

// Get all moods for a user
router.get("/:userId", getUserMoods);

module.exports = router;
