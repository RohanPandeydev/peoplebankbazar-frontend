import React from "react";
import { NavLink } from "react-router-dom";
import { CALCULATOR_LINKS } from "../../../helpers/constants/navLinks";

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
