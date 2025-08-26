import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import AuthButtons from "./AuthButtons";

const DesktopNav = ({ isDropdownOpen, setIsDropdownOpen, setActiveModal }) => {
  return (
    <nav className="hidden md:flex space-x-8 items-center">
      <NavLink to="/" className="hover:text-blue-500">Home</NavLink>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="hover:text-blue-500"
        >
          Calculators ▼
        </button>
        {isDropdownOpen && <DropdownMenu />}
      </div>

      <NavLink to="/hot-offers" className="hover:text-blue-500">Hot Offers</NavLink>
      <NavLink to="/contact" className="hover:text-blue-500">Contact Us</NavLink>

      {/* Auth buttons */}
      <AuthButtons setActiveModal={setActiveModal} />
    </nav>
  );
};

export default DesktopNav;
