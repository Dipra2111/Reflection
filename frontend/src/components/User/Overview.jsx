import React from "react";
import { useNavigate } from "react-router-dom";

export default function OverviewPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-lime-100 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-6">Mood Saved Successfully 🎉</h2>
      <p className="text-lg mb-8">What would you like to do next?</p>

      <div className="flex gap-4">
        {/* Go Home */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
        >
          Go to Home
        </button>

        {/* Go to Mood Progression */}
        <button
          onClick={() => navigate("/progression")}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
        >
          Check Mood Progression
        </button>
      </div>
    </div>
  );
}
