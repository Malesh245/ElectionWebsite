import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainItem from "./components/MainItem";

const App = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      {/**header section */}
      <Header />
      {/**main section */}
      <MainItem />
      {/**footer section */}
      <Footer />
    </div>
  );
};

export default App;
