import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* bg-gray-100 */}
        <div className=" p-6 text-center rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Phone Number:</p>
            <p className="text-gray-800 mb-4">9867771976</p>
            <div className="flex justify-center mb-4">
              <button
                onClick={() =>
                  (window.location.href = "https://wa.me/919867771976")
                }
                className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center gap-2"
              >
                <FaWhatsapp style={{ fontSize: "24px" }} />
                Message us on WhatsApp
              </button>
            </div>
            <p className="text-lg font-semibold mb-2">Email:</p>
            <p className="text-gray-800 mb-4">shauryaelection@gmail.com</p>
            <p className="text-lg font-semibold mb-2">Address:</p>
            <p className="text-gray-800">
              Off. No. D1/3, G Floor, Sai Baba Nagar, Near Cambridge School,
              Kolsewadi, Kalyan (E) 421306.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
