import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MeditatePage from "../components/navitems/Meditate";
const MoodPage = () => {
  return (
    <div>
      <Navbar/>
      <MeditatePage/>
      <Footer/>
    </div>
  );
};

export default MoodPage;
