import React, { useState } from "react";

const Header = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [language, setLanguage] = useState("en");

  // Handle change event for the dropdown
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDrop(false);
  };

  return (
    <header className="w-full h-20 shadow-md bg-blue-600 sticky z-50">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-xl font-semibold"></h3>
        <div className="text-lg lg:text-2xl font-medium text-white">
          Voter Search
        </div>
        <div className="text-base font-light">
          <div className="relative" onClick={() => setIsDrop(!isDrop)}>
            <div className="flex items-center p-1 border rounded-sm cursor-pointer">
              <div className="pr-8 text-lg text-white">
                {language === "en" ? "English" : "Marathi"}
              </div>
              <svg
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
              {isDrop && (
                <div className="absolute p-1 border rounded-sm bg-white right-0 top-10 flex flex-col items-center justify-start w-24">
                  <div
                    className="flex items-center p-1 rounded-sm cursor-pointer w-full hover:bg-green-200"
                    onClick={() => handleLanguageChange("en")}
                  >
                    <div className="pr-8 text-lg">English</div>
                  </div>
                  <div
                    className="flex items-center p-1 rounded-sm cursor-pointer w-full hover:bg-green-200"
                    onClick={() => handleLanguageChange("mr")}
                  >
                    <div className="pr-8 text-lg">Marathi</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
