import React, { useState } from "react";
import Modal from "../../ui/Modal"; // adjust path
import TextInput from "../../ui/TextInput";

const SignInModal = ({ isOpen, onClose, onSubmitPhone }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      onSubmitPhone(phone);
    } else {
      alert("Enter a valid 10-digit number");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign In">
      <p className="text-md font-medium text-black my-1">
        For a more personalised experience, sign in with your registered
        mobile number
      </p>

      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-md font-light text-gray-700 mb-3">
            Phone Number
          </label>
          <div className="flex items-center">
            <span className="px-3 py-2.5 bg-gray-100 border border-r-0 border-[#d9d9d9] rounded-l-md text-gray-700 text-sm">
              +91
            </span>
            <TextInput
              type="tel"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter 10-digit phone number"
              className="rounded-r-md"
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
    </Modal>
  );
};

export default SignInModal;
