
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import QuoteSection from "../components/QuoteSection.jsx/QuoteSection";
import Vision from "../components/Vision/Vision";
import Library from "../components/Library/Library";
import Depression from "../components/Library/Depression";
import Sleep from "../components/Library/Sleep";
import Footer from "../components/Footer/Footer";
const LandingPage = () => {
  return (
    <div className="main_container_Landing">
      <Navbar />
      <QuoteSection/>
      <Vision/>
      <Library/>
      <Depression/>
      <Sleep/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
