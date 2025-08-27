import React from "react";
import { NavLink } from "react-router-dom";
const CALCULATOR_LINKS = [
  { to: "/calculator/mortgage", label: "SIP Calculator" },
  { to: "/calculator/loan", label: "Personal Loan Calculator" },
  { to: "/calculator/home", label: "Home Loan Calculator" },
  { to: "/calculator/business", label: "Business Loan Calculator" },
  { to: "/calculator/education", label: "Education Loan Calculator" },
  { to: "/calculator/gold", label: "Gold Loan Calculator" },
  { to: "/calculator/car", label: "Car Loan Calculator" },
];
const DropdownMenu = ({ mobile }) => {
  return (
    <div className={`absolute bg-white shadow-md mt-2 rounded-md ${mobile ? "relative mt-0 shadow-none" : ""}`}>
      <ul className="flex flex-col p-2">
        {CALCULATOR_LINKS.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.to}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
