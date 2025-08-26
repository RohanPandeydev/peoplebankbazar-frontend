import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const SignInModal = ({ onClose, onSubmitPhone }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      onSubmitPhone(phone); // tell parent to move to OTP
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>

      {/* Modal panel */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-md z-50 transform transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 bg-blue-200 px-6 py-4">
          <h2 className="text-xl font-semibold">Sign In</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            <IoMdCloseCircle />
          </button>
        </div>

        {/* Body */}
        <p className="text-md font-medium text-black my-1 px-6">
          For a more personalised experience, sign in with your registered
          mobile number
        </p>

        <form className="space-y-4 p-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-md font-light text-gray-700 mb-3">
              Phone Number
            </label>
            <div className="flex items-center">
              <span className="px-3 py-2.5 bg-gray-100 border border-r-0 border-[#d9d9d9] rounded-l-md text-gray-700 text-sm">
                +91
              </span>
              <input
                type="tel"
                maxLength={10}
                pattern="[0-9]{10}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter 10-digit phone number"
                className="w-full px-3 py-2 border border-[#d9d9d9] rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Sign In with OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
