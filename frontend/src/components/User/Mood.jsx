import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MoodPage() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  // ✅ Check if user is logged in and get userId
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId"); // must be saved during login/signup
    if (!storedUserId) {
      alert("User not logged in.");
      navigate("/"); // redirect to login/home
    } else {
      setUserId(storedUserId);
    }
  }, [navigate]);

  // ✅ Handle mood submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mood) {
      alert("Please select a mood before submitting.");
      return;
    }

    const moodData = {
      userId,
      mood,
      note,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/moods", moodData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        alert("Mood saved successfully ✅");
        setMood("");
        setNote("");
        navigate("/overview"); // go to moods overview page
      }
    } catch (err) {
      console.error("Error saving mood:", err);
      alert("Error saving mood: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen bg-lime-200 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-4">How are you feeling today?</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        {/* Mood Dropdown */}
        <label className="block">
          <span className="block mb-1 font-semibold">Select your mood</span>
          <select
            className="w-full p-2 border rounded"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
          >
            <option value="">Choose a mood</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="neutral">😐 Neutral</option>
            <option value="angry">😡 Angry</option>
            <option value="anxious">😟 Anxious</option>
            <option value="excited">🤩 Excited</option>
          </select>
        </label>

        {/* Optional Note */}
        <textarea
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Want to share more about how you feel? (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold px-4 py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
