import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import AuthButtons from "./AuthButtons";

const MobileNav = ({ isOpen, setIsOpen, setActiveModal }) => {
  return (
    <>
      {/* Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Slide Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6">
          <button className="text-2xl mb-6" onClick={() => setIsOpen(false)}>✖</button>
          
          <nav className="flex flex-col space-y-4">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <DropdownMenu mobile />
            <NavLink to="/hot-offers" onClick={() => setIsOpen(false)}>Hot Offers</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
            <AuthButtons setActiveModal={setActiveModal} />
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
