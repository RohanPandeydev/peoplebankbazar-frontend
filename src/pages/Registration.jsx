import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/ui/TextInput";
import SelectInput from "../components/ui/SelectInput";
import RadioGroup from "../components/ui/RadioGroup";
import TextArea from "../components/ui/TextArea";
import OtpInput from "../components/ui/OtpInput";
import ROUTE_PATHS from "../routes/routePaths";

const GENDERS = ["Male", "Female", "Other"];
const MARITAL = ["Married", "Unmarried"];
const OCCUPATIONS = ["Salaried", "Self Employed", "Business Man", "Student"];

const Registration = () => {
  const navigate = useNavigate();

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

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(s => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic guard
    if (!/^\d{10}$/.test(formData.phone)) {
      Swal.fire({ icon:"error", title:"Invalid Phone", text:"Enter a valid 10-digit mobile number" });
      return;
    }
    setShowOtp(true);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      await Swal.fire({
        icon: "success",
        title: "Verification Successful!",
        text: "You've been registered successfully.",
        confirmButtonColor: "#2563eb",
      });
      navigate(ROUTE_PATHS.HOME);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please enter a valid 4-digit OTP.",
      });
    }
  };

  return (
    <>
      {!showOtp ? (
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-2xl rounded-2xl p-8 my-16">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-3">
            Complete Your Registration
          </h2>
          <p className="text-lg font-light text-center text-gray-500 mb-8">
            After you fill the form below, we will verify your number with an OTP.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TextInput label="First Name" name="firstName" value={formData.firstName} onChange={onChange} required placeholder="John" />
            <TextInput label="Last Name"  name="lastName"  value={formData.lastName}  onChange={onChange} required placeholder="Doe"  />

            <TextInput label="Date of Birth" type="date" name="dob" value={formData.dob}
              onChange={onChange} required onFocus={(e)=>e.target.showPicker?.()} />

            <RadioGroup label="Gender" name="gender" options={GENDERS} value={formData.gender} onChange={onChange} />

            <TextInput label="City" name="city" value={formData.city} onChange={onChange} required placeholder="e.g. Mumbai" />
            <TextInput label="Pin Code" name="pinCode" value={formData.pinCode}
              onChange={onChange} maxLength={6} pattern="\d{6}" required placeholder="400001" />

            <TextInput label="Country" name="country" value={formData.country} onChange={onChange} required />

            {/* Phone with +91 prefix */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-700 text-sm">+91</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  maxLength={10}
                  pattern="\d{10}"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                  placeholder="Enter 10-digit number"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <TextArea label="Address" name="address" value={formData.address} onChange={onChange} required placeholder="Street, Area, Landmark" />
            </div>

            <SelectInput label="Occupation" name="occupation" value={formData.occupation} onChange={onChange} required>
              <option value="">Select Occupation</option>
              {OCCUPATIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </SelectInput>

            <RadioGroup label="Marital Status" name="maritalStatus" options={MARITAL} value={formData.maritalStatus} onChange={onChange} />

            {formData.maritalStatus === "Married" && (
              <TextInput label="Number of Kids" type="number" name="kids" value={formData.kids} onChange={onChange} min="0" placeholder="e.g. 2" />
            )}

            <div className="sm:col-span-2">
              <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition duration-300 shadow-lg">
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[60vh] animate-slide-down">
          <div className="bg-white shadow-xl rounded-xl p-8 w-[90%] max-w-md border border-blue-100">
            <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">Verify OTP</h2>
            <p className="text-sm text-gray-500 text-center mb-6">We've sent a 4-digit OTP to your phone number.</p>
            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
              <OtpInput value={otp} onChange={setOtp} length={4} />
              <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Verify & Proceed
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;
