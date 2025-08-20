import React from "react";
import VisionImage from "../assets/VisionImage.jpg"; // Replace with your actual image path

const Vision = () => {
  return (
    <div className="bg-lime-200 px-8 py-12 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={VisionImage}
          alt="Our Vision"
          className="rounded-md w-full h-auto max-h-[400px] object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ml-4">
          Our vision is to create a compassionate digital space where mental health is
          prioritized, stigma is broken, and individuals feel empowered to understand,
          reflect, and heal. We envision a world where everyone has easy access to tools,
          support, and a community that nurtures emotional well-being.
        </h2>
      </div>
    </div>
  );
};

export default Vision;
