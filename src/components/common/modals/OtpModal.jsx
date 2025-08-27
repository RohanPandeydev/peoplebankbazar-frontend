// src/components/common/modals/OtpModal.jsx
import React, { useEffect, useState } from "react";
import OtpInput from "../../ui/OtpInput";
import Modal from "../../ui/Modal";

const OtpModal = ({ isOpen, onClose, phoneNumber, onSuccess }) => {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (isOpen) {
      setOtp(""); // reset OTP when modal opens
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length === 4) {
      onClose();
      await Swal.fire({
        title: "OTP Verified",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#22c55e",
      });
      if (onSuccess) onSuccess(otp);
    } else {
      Swal.fire({
        title: "Incomplete OTP",
        text: "Please enter the full 4-digit OTP.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Enter OTP">
      <p className="text-md font-medium text-black mb-4">
        Enter the OTP sent to <strong>+91 {phoneNumber}</strong>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ✅ Use OtpInput here */}
        <OtpInput length={4} value={otp} onChange={setOtp} />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Verify OTP
        </button>
      </form>
    </Modal>
  );
};

export default OtpModal;
