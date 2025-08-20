import React, { useState, useRef, useEffect } from "react";

export default function MeditatePage() {
  const [selectedSound, setSelectedSound] = useState("");
  const [time, setTime] = useState(null);
  const [isMeditating, setIsMeditating] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const sounds = [
    { label: "🌊 Ocean Waves", src: "/sounds/ocean.mp3" },
    { label: "🌲 Forest Birds", src: "/sounds/forest.mp3" },
    { label: "🔥 Campfire", src: "/sounds/fire.mp3" },
    { label: "🎶 Soft Flute", src: "/sounds/flute.mp3" },
    { label: "☔ Rain", src: "/sounds/rain.mp3" },
  ];

  const timers = [20, 30, 40, 50, 60]; // minutes

  const startMeditation = () => {
    if (!selectedSound || !time) {
      alert("Please select a sound and a timer to start meditation.");
      return;
    }

    const confirmed = window.confirm(
      "Have you put on your headphones/earphones? 🎧"
    );
    if (!confirmed) return;

    setIsMeditating(true);
    setCountdown(time * 60); // minutes to seconds
    audioRef.current.play();

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          stopMeditation(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopMeditation = (completed = false) => {
    clearInterval(timerRef.current);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsMeditating(false);
    setCountdown(null);
    if (completed) {
      alert("Meditation session completed 🙏");
    } else {
      alert("Meditation stopped early 🛑");
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center text-white p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-2xl shadow-lg max-w-lg w-full">
        {!isMeditating ? (
          <>
            <h1 className="text-4xl font-bold mb-4">🧘 Meditation Time</h1>
            <p className="mb-4 text-lg font-medium">Find a quiet place 🌿</p>
            <p className="mb-6 text-lg">
              Put on your{" "}
              <span className="font-semibold">headphones/earphones</span>, close
              your eyes, and relax.
            </p>

            {/* Select Sound */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Choose a sound</h2>
              <select
                className="w-full p-2 rounded text-black"
                value={selectedSound}
                onChange={(e) => setSelectedSound(e.target.value)}
              >
                <option value="">-- Select a sound --</option>
                {sounds.map((sound, idx) => (
                  <option key={idx} value={sound.src}>
                    {sound.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Timer */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Set a timer</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {timers.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`px-4 py-2 rounded-lg ${
                      time === t
                        ? "bg-green-500"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {t} min
                  </button>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={startMeditation}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg"
            >
              Start Meditation
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Meditation in Progress…</h1>
            <p className="text-2xl mb-6">
              Remaining Time:{" "}
              <span className="font-mono">{formatTime(countdown)}</span>
            </p>
            <p className="italic mb-6">Close your eyes, breathe slowly 🌸</p>

            {/* Stop Button */}
            <button
              onClick={() => stopMeditation(false)}
              className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-lg"
            >
              Stop Meditation
            </button>
          </>
        )}

        {/* Audio Player (hidden) */}
        <audio ref={audioRef} loop>
          {selectedSound && <source src={selectedSound} type="audio/mp3" />}
        </audio>
      </div>
    </div>
  );
}
