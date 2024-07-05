import React, { useState } from "react";
import voterList from "../ListOfVoter";

const MainItem = () => {
  const [formData, setFormData] = useState({
    college: "",
    firstName: "",
    middleName: "",
    lastName: "",
    epicNumber: "",
  });

  const [voter, setVoter] = useState(voterList);

  console.log(voter);

  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);
    setResult(null);

    const query = formData.epicNumber
      ? `epicNumber=${formData.epicNumber}`
      : `firstName=${formData.firstName}&middleName=${formData.middleName}&lastName=${formData.lastName}&college=${formData.college}`;

    try {
      const response = await fetch(
        `https://your-api-endpoint.com/search?${query}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setResult(data[0]); // Assuming API returns an array of results
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-auto max-w-sm md:max-w-lg lg:max-w-2xl h-screen">
      <div className="flex pt-4">
        <nav className="text-base text-brand" aria-label="breadcrumb">
          <ol className="flex space-x-2">
            <li>
              <a
                href="/"
                className="text-brand flex items-center justify-center text-center text-xl"
              >
                <svg
                  className="w-5 h-5"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                </svg>
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="flex items-center justify-center text-center text-xl">
              <svg
                className="w-5 h-5 mr-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
              </svg>
              Search
            </li>
          </ol>
        </nav>
        <div
          className="text-base text-brand ml-auto cursor-pointer"
          onClick={() => setShowHelp(!showHelp)}
        >
          {showHelp ? "Close" : "Help"}
        </div>
      </div>
      <hr className="w-full my-4" />
      <div className="shadow rounded mb-4">
        <img
          src="https://api-voter-search.webemps.com/images/shivajiraonalawade.png"
          width="100%"
          alt="banner"
        />
      </div>
      {showHelp ? (
        <div className="bg-white p-4 rounded mb-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Steps to search name:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Select Booth No</li>
            <li>Enter at least 3 alphabets of your first name</li>
            <li>Enter at least 3 alphabets of your middle name</li>
            <li>Enter at least 3 alphabets of your last name</li>
            <li>Search your name in the list</li>
            <li>You can share it on WhatsApp OR SMS</li>
          </ul>
        </div>
      ) : result || error ? (
        <div className="shadow rounded mb-4">
          <div className="bg-brand p-4 rounded-t bg-blue-600 h-24 flex items-center">
            <span className="text-2xl font-semibold">Voter Detail</span>
          </div>
          {loading && (
            <div className="p-4 bg-blue-100 text-blue-600 shadow-md rounded-md mt-4">
              Loading...
            </div>
          )}
          {result && (
            <div className="p-4 bg-green-100 text-green-600 shadow-md rounded-md mt-4">
              <h2 className="text-xl font-semibold mb-2">Search Result:</h2>
              <p>College: {result.college}</p>
              <p>First Name: {result.firstName}</p>
              <p>Middle Name: {result.middleName}</p>
              <p>Last Name: {result.lastName}</p>
              <p>EPIC Number: {result.epicNumber}</p>
            </div>
          )}
          {error && (
            <div className="p-4 bg-red-100 text-red-600 shadow-md rounded-md mt-4">
              No data found.
            </div>
          )}
        </div>
      ) : (
        <div className="shadow rounded mb-4">
          <div className="bg-brand p-4 rounded-t bg-blue-600 h-24 flex items-center">
            <span className="text-2xl font-semibold">
              - Shikshak Matdar Sangh Mumbai Election 2024
            </span>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label
                htmlFor="college"
                className="block text-sm font-medium text-gray-700"
              >
                School/College
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="college"
                  value={formData.college}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button type="button" className="p-1 focus:outline-none">
                    <svg
                      className="w-5 h-5"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-gray-700"
              >
                Middle Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <p className="text-center my-4 text-gray-700">OR</p>
            <div className="mb-4">
              <label
                htmlFor="epicNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Voter EPIC No
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="epicNumber"
                  value={formData.epicNumber}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-4 p-4">
            <button
              className="bg-brand text-white w-full py-2 rounded-md bg-blue-600"
              type="button"
              onClick={() =>
                setFormData({
                  college: "",
                  firstName: "",
                  middleName: "",
                  lastName: "",
                  epicNumber: "",
                })
              }
            >
              &lt; BACK
            </button>
            <button
              className="bg-brand text-white w-full py-2 rounded-md bg-blue-600"
              type="button"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
          {loading && (
            <div className="p-4 bg-blue-100 text-blue-600 shadow-md rounded-md mt-4">
              Loading...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainItem;
