import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [education, setEducation] = useState("");
  const [jobField, setJobField] = useState("");
  const [designation, setDesignation] = useState("");
  const [stressLevel, setStressLevel] = useState(5);
  const [describeSelf, setDescribeSelf] = useState("");
  const [enjoyMost, setEnjoyMost] = useState("");
  const [hasIllness, setHasIllness] = useState("");
  const [illnessDetails, setIllnessDetails] = useState("");
  const [reason, setReason] = useState("");
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (!storedUserId) {
      alert("User not logged in.");
      navigate("/"); // Redirect to homepage or login
    } else {
      setUserId(storedUserId);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = {
      userId,
      gender,
      profession,
      educationType: profession === "Student" ? education : undefined,
      jobField: profession === "Working Professional" ? jobField : undefined,
      designation: profession === "Other" ? designation : undefined,
      stressLevel: ["Working Professional", "Other"].includes(profession)
        ? stressLevel
        : undefined,
      twoWords: describeSelf,
      enjoyment: enjoyMost,
      hasIllness,
      illnessDescription: hasIllness === "Yes" ? illnessDetails : undefined,
      reasonForJoining: reason,
    };

    try {
      await axios.post("/api/userinfo", userInfo);
      alert("Information submitted successfully");
      navigate("/moodpage");
    } catch (err) {
      alert("Error submitting information: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen bg-lime-200 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-4">Tell us about a bit about yourself</h2>

      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-white p-6 rounded-lg shadow">
        {/* Gender */}
        <label className="block">
          <span className="block mb-1 font-semibold">Gender</span>
          <select
            className="w-full p-2 border rounded"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="PreferNot">I prefer not to say</option>
          </select>
        </label>

        {/* Profession */}
        <label className="block">
          <span className="block mb-1 font-semibold">Profession</span>
          <select
            className="w-full p-2 border rounded"
            required
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {/* Conditional Profession Fields */}
        {profession === "Student" && (
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Type of education (UG, PG, PhD)"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />
        )}
        {profession === "Working Professional" && (
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Briefly describe your job field"
            value={jobField}
            onChange={(e) => setJobField(e.target.value)}
            required
          />
        )}
        {profession === "Other" && (
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Please state your current designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        )}

        {/* Stress Level */}
        {(profession === "Working Professional" || profession === "Other") && (
          <label className="block">
            <span className="block mb-1 font-semibold">
              Rate your current stress level (1 to 10)
            </span>
            <input
              type="range"
              min="1"
              max="10"
              value={stressLevel}
              onChange={(e) => setStressLevel(e.target.value)}
              className="w-full"
            />
            <div className="text-center font-medium">
              Stress Level: {stressLevel}
            </div>
          </label>
        )}

        {/* Describe Yourself */}
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Describe yourself in two words"
          value={describeSelf}
          onChange={(e) => setDescribeSelf(e.target.value)}
          required
        />

        {/* Enjoy Most */}
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="What do you enjoy doing the most?"
          value={enjoyMost}
          onChange={(e) => setEnjoyMost(e.target.value)}
          required
        />

        {/* Illness */}
        <label className="block">
          <span className="block mb-1 font-semibold">
            Are you suffering from a terminal or long-time illness?
          </span>
          <select
            className="w-full p-2 border rounded"
            value={hasIllness}
            onChange={(e) => setHasIllness(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
        {hasIllness === "Yes" && (
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Please describe the illness"
            value={illnessDetails}
            onChange={(e) => setIllnessDetails(e.target.value)}
            required
          />
        )}

        {/* Reason for Joining */}
        <label className="block">
          <span className="block mb-1 font-semibold">
            Why did you join this website?
          </span>
          <select
            className="w-full p-2 border rounded"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Reduce Stress">Want to reduce stress levels</option>
            <option value="Trouble Sleeping">Trouble sleeping</option>
            <option value="Mental Health">I think I am suffering from mental health problems</option>
            <option value="Not Sure">I don't know yet</option>
          </select>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold px-4 py-2 rounded transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
