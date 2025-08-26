import React from "react";

const AuthButtons = ({ setActiveModal }) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setActiveModal("signin")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Sign In
      </button>
      <button
        onClick={() => setActiveModal("register")}
        className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md"
      >
        Register
      </button>
    </div>
  );
};

export default AuthButtons;
