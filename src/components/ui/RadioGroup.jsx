import React from "react";

const RadioGroup = ({ label, name, options = [], value, onChange }) => (
  <div>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <div className="flex flex-wrap gap-4 mt-1">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
            className="focus:ring-blue-300"
          />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default RadioGroup;
