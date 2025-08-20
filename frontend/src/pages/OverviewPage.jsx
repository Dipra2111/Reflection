import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Overview from "../components/User/Overview";
const MoodPage = () => {
  return (
    <div>
      <Navbar/>
      <Overview/>
      <Footer/>
    </div>
  );
};

export default MoodPage;
