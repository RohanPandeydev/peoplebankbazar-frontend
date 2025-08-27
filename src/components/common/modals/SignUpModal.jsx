import React, { useState, useEffect } from "react";
import Modal from "../../ui/Modal";
import TextInput from "../../ui/TextInput";
import SelectInput from "../../ui/SelectInput";
import RadioGroup from "../../ui/RadioGroup";
import TextArea from "../../ui/TextArea";

const GENDERS = ["Male", "Female", "Other"];
const MARITAL = ["Married", "Unmarried"];
const OCCUPATIONS = ["Salaried", "Self Employed", "Business Man", "Student"];

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  // prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Your Account">
      <p className="text-md sm:text-lg font-medium text-center text-gray-600 mb-8">
        Fill out your details and we’ll verify your number with OTP.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TextInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
        <TextInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
        <TextInput label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <RadioGroup label="Gender" name="gender" options={GENDERS} value={formData.gender} onChange={handleChange} />

        <TextInput label="City" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Mumbai" required />
        <TextInput label="Pin Code" name="pinCode" value={formData.pinCode} onChange={handleChange} maxLength={6} pattern="\d{6}" placeholder="400001" required />
        <TextInput label="Country" name="country" value={formData.country} onChange={handleChange} required />

        {/* Phone Input with prefix */}
        <TextInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          maxLength={10}
          placeholder="Enter 10-digit phone number"
          prefix="+91"
          required
        />

        <div className="sm:col-span-2">
          <TextArea
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street, Area, Landmark"
            required
          />
        </div>

        <SelectInput label="Occupation" name="occupation" value={formData.occupation} onChange={handleChange} required>
          <option value="">Select Occupation</option>
          {OCCUPATIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </SelectInput>

        <RadioGroup label="Marital Status" name="maritalStatus" options={MARITAL} value={formData.maritalStatus} onChange={handleChange} />

        {formData.maritalStatus === "Married" && (
          <TextInput type="number" label="Number of Kids" name="kids" value={formData.kids} onChange={handleChange} min="0" placeholder="e.g. 2" />
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition duration-300 shadow-md"
          >
            Create Account
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SignUpModal;
