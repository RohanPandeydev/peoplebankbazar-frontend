// src/components/common/modals/OtpModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Swal from "sweetalert2";

const OtpModal = ({ isOpen, onClose, phoneNumber, onSuccess }) => {
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setOtp(["", "", "", ""]);
      setTimeout(() => inputRefs.current[0]?.focus(), 300);
    } else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");

    if (finalOtp.length === 4) {
      onClose(); // close modal first
      await Swal.fire({
        title: "OTP Verified",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#22c55e",
      });

      // ✅ Let parent (Header) decide next action
      if (onSuccess) onSuccess(finalOtp);
    } else {
      Swal.fire({
        title: "Incomplete OTP",
        text: "Please enter the full 4-digit OTP.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
    }
  };

  if (!isOpen && !show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-80" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* OTP Modal */}
      <div
        className={`relative bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-md z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-1/3 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4 bg-green-100 px-6 py-4">
          <h2 className="text-xl font-semibold">Enter OTP</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            <IoMdCloseCircle />
          </button>
        </div>

        <p className="text-md font-medium text-black my-1 px-6">
          Enter the OTP sent to <strong>+91 {phoneNumber}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div className="flex justify-center gap-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpModal;
