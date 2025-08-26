import React, { useState, useEffect } from "react";

const SignUpModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    city: "",
    pinCode: "",
    country: "India",
    phone: "",
    address: "",
    occupation: "",
    maritalStatus: "",
    kids: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose(); // ✅ close modal after submit
  };

  // prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-xl border border-blue-100 shadow-2xl rounded-2xl p-6 sm:p-10 overflow-y-auto max-h-[90vh] scrollbar-hide">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-2">
          Create Your Account
        </h2>
        <p className="text-md sm:text-lg font-medium text-center text-gray-600 mb-8">
          Fill out your details and we’ll verify your number with OTP.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
          <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
          <Input type="date" label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} />

          {/* Gender */}
          <div>
            <Label text="Gender" />
            <div className="flex gap-4 mt-1">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <Input label="City" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Mumbai" />
          <Input label="Pin Code" name="pinCode" value={formData.pinCode} onChange={handleChange} maxLength={6} pattern="\d{6}" placeholder="400001" />
          <Input label="Country" name="country" value={formData.country} onChange={handleChange} />

          {/* Phone Number */}
          <div>
            <Label text="Phone Number" />
            <div className="flex rounded-lg shadow-sm border border-blue-400 overflow-hidden">
              <span className="inline-flex items-center px-3 bg-transparent text-sm text-gray-700 border-r border-blue-500">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                pattern="\d{10}"
                required
                className="w-full px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                placeholder="Enter 10-digit number"
              />
            </div>
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <Label text="Address" />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              required
              className="w-full px-4 py-2 border border-blue-400 text-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-gray-400 hover:border-blue-500"
              placeholder="Street, Area, Landmark"
            />
          </div>

          {/* Occupation */}
          <div>
            <Label text="Occupation" />
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-blue-400 text-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            >
              <option value="">Select Occupation</option>
              <option value="Salaried">Salaried</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Business Man">Business Man</option>
              <option value="Student">Student</option>
            </select>
          </div>

          {/* Marital Status */}
          <div>
            <Label text="Marital Status" />
            <div className="flex gap-4 mt-1">
              {["Married", "Unmarried"].map((status) => (
                <label key={status} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value={status}
                    checked={formData.maritalStatus === status}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>

          {/* Kids Field */}
          {formData.maritalStatus === "Married" && (
            <Input type="number" label="Number of Kids" name="kids" value={formData.kids} onChange={handleChange} placeholder="e.g. 2" min="0" />
          )}

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition duration-300 shadow-md"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable input component
const Input = ({ label, ...props }) => (
  <div className="mb-2">
    <Label text={label} />
    <input
      {...props}
      className="w-full px-4 py-2 border border-blue-400 text-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-gray-400 hover:border-blue-500"
    />
  </div>
);

// Reusable label component
const Label = ({ text }) => (
  <label className="block text-sm font-semibold text-gray-800 mb-1 tracking-wide">
    {text}
  </label>
);

export default SignUpModal;
