import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-50 selection:text-[#1D61E7]">
      <Navbar />
      <main className="flex-grow">
        <div className="md:pt-0">
          <Section />
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
