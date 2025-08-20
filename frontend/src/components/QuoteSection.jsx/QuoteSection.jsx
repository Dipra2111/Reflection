import { useState } from "react";
import SignUpModal from "./SignUpModal";
import happyGroup from "../assets/happygroup.jpg";

export default function QuoteSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-lime-200 p-8">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          “Mental health is not a destination, but a process. It’s about how you drive, not where you’re going.”
        </h2>
        <p className="text-black font-semibold mt-2">– Noam Shpancer</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black mt-6 px-6 py-2 font-semibold border hover:bg-black hover:text-white transition"
        >
          GET STARTED
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={happyGroup}
          alt="Happy people"
          className="w-full h-83 object-cover rounded"
        />
      </div>

      {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
