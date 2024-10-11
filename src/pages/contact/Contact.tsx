import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import CallBackSection from "../Home/CallBackSection/CallBackSection";

const Contact = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="bg-cover bg-center h-80 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 ">Contact Us</h1>
          <p className="text-lg text-[#9867ff]">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <CallBackSection />

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">More Ways to Find Us</h2>
          <p className="text-xl mb-8 text-center">
            You can also reach out to us through the following contact details:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="text-4xl text-white mr-4" />
              <div>
                <p className="text-lg font-bold">Our Address</p>
                <p className="text-md">
                  26 James Street, Southampton, United Kingdom, SO14 1PJ
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center justify-center">
              <FaEnvelope className="text-4xl text-white mr-4" />
              <div>
                <p className="text-lg font-bold">Email Us</p>
                <p className="text-md">support@seoideaplanet.com</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center justify-center">
              <FaPhoneAlt className="text-4xl text-white mr-4" />
              <div>
                <p className="text-lg font-bold">Call Us</p>
                <p className="text-md">+447365794280</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
