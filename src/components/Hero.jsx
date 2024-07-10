import React from "react";

const Hero = () => {
  return (
    <section className="py-10 mt-6">
      <div className="container mx-auto px-4">
        {/* bg-gradient-to-r from-yellow-400 to-orange-500  */}
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white text-black p-4 rounded-lg shadow-lg mb-6">
              <h2 className="font-bold text-lg">Dynamic Videos</h2>
              <p>
                The name of each voter will appear in a video clip and sent on
                WhatsApp.
              </p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-lg mb-6">
              <h2 className="font-bold text-lg">Dynamic Image</h2>
              <p>
                The image will show the name of each voter. It will be sent on
                WhatsApp immediately.
              </p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-lg mb-6">
              <h2 className="font-bold text-lg">Dynamic Text</h2>
              <p>
                WhatsApp adds the voter's name to the text message and sends the
                exact voter.
              </p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-lg mb-6">
              <h2 className="font-bold text-lg">Mobile No. Database</h2>
              <p>Voters in your area have their cell phones No. available.</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-lg mb-6">
              <h2 className="font-bold text-lg">Auto Voice Call</h2>
              <p>
                An auto voice call is made to the voters in your recorded voice.
              </p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-lg mb-6">
              <h2 className="font-bold text-lg">Auto Bulk Sms</h2>
              <p>
                Your sender name is created and the message you send is verified
                by TRI and Auto Send.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-center font-bold text-xl mb-4">
                Election Management Software
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white text-black p-4 rounded-lg  text-center shadow-lg mb-4">
                  Alphabetically List
                </div>
                <div className="bg-white text-black p-4 rounded-lg text-center shadow-lg mb-4">
                  Advance Search (From Age To Age)
                </div>
                <div className="bg-white text-black p-4 rounded-lg text-center shadow-lg mb-4">
                  Village Wise List
                </div>
                <div className="bg-white text-black p-4 rounded-lg text-center shadow-lg mb-4">
                  Booth Wise List
                </div>
                <div className="bg-white text-black p-4 rounded-lg text-center shadow-lg mb-4">
                  Caste Wise List
                </div>
                <div className="bg-white text-black p-4 rounded-lg text-center shadow-lg mb-4">
                  Surname Wise List
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
