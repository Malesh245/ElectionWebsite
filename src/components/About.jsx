import React, { useState } from "react";
import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const content = [
    "We are working in the surveying field since the last 10 years. While working in the field of data, we started Om Sai Multiservices Firm. In this, we are doing the work of document management of government offices, document scanning, and data processing. Also, we started working in the political field from 2019. Om Sai Multiservices owner Mr. Asif Shaikh is educated in B.A.(Political Science), D.ed (KMS Gov. College Parel, Mumbai.). Started working in politics in the year 2019 Maharashtra Vidhansabha, Lok Sabha elections. It mainly conducted political survey, social survey in rural areas, urban areas of Thane district with a team. In the survey, the questions of the constituency were collected by meeting people from all constituencies. Persons in the locality who exercise their influence over the electorate. Or there is a large class in the area that considers an individual. Such power centers were discovered.",
    "Also, to find out what are the comprehensive problems of the area, the problems of the youth, the problems of women, what are the comprehensive problems of the backward parts of the society and the solutions to them. It became easy to decide the strategy for the next election by discussing all such matters. What should be given importance, which issues should be pressed, which issues should be addressed or talked about, who should speak became easy and the campaign got a direction.",
    "In July 2022, for Konkan Division Teacher Constituency, we worked for Hon. MLA Shri Dnyaneshwar Mhatre Sir. Konkan Division Teacher MLA Constituency includes 5 districts. In this, we filled the voter registration form of the teachers at the school and submitted it to the tehsil office. While filling the form, keeping in mind the guidelines given by the Election Commission, our team member filled the form properly along with fellow teachers and workers. Keeping in mind the fact that the higher the voter registration, the more sure we are of getting vijayi, we filled as many forms as possible and submitted them to the tehsil office of the respective taluka. President of Badlapur Nagar Parishad Hon. We did all this work on the field and officially under the valuable guidance of Vaman Mhatre sir. Along with Hon. MLA Shri Dnyaneshwar Mhatre sir accompanied by his team of workers. Who gave us full cooperation to fill the form in school.",
    "From 20 days before the polling, we formed a team who had to call every voter's and convince them. The team handled their work in a very systematic manner and imprinted the name of Dnyaneshwar Mhatre in the minds of the voters to vote for. On 2/Feb/2023, Sir was declared the winner. Sir took almost 20 thousand first choice votes. Sir took notice of the work done by giving a certificate.",
    "In February 2024, we started a firm named Shaurya Election Management. We are hereby offering the following services precisely.",
    // Add more content as necessary
  ];
  const goToPrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? content.length - 1 : prevPage - 1
    );
  };

  const goToNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === content.length - 1 ? 0 : prevPage + 1
    );
  };

  return (
    <section id="about" className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* bg-gray-100 */}
        <div className=" p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8 text-left">{content[currentPage]}</p>
          <div className="flex justify-center items-center gap-4">
            <FaChevronLeft
              className="text-blue-500 cursor-pointer"
              onClick={goToPrevious}
            />
            {content.map((_, index) => (
              <FaCircle
                key={index}
                className={`cursor-pointer ${
                  currentPage === index ? "text-blue-500" : "text-gray-300"
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
            <FaChevronRight
              className="text-blue-500 cursor-pointer"
              onClick={goToNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
