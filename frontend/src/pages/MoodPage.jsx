import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Mood from "../components/User/Mood";
const MoodPage = () => {
  return (
    <div>
      <Navbar/>
      <Mood/>
      <Footer/>
    </div>
  );
};

export default MoodPage;
