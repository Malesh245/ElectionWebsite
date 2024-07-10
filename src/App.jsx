import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      {/* Scroll to Top Button */}
      <button
        className={`fixed bottom-4 right-4 bg-gray-500 text-white p-4 rounded-full shadow-md transition-opacity ${
          showScroll ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollTop}
      >
        <FaArrowUp size={"24px"} />
      </button>
    </div>
  );
}

export default App;
