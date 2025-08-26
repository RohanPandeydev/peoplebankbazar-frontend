import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col items-start gap-2 md:gap-5 mb-3">
      <h5 className="text-md md:text-lg uppercase font-semibold text-white">
        {title}
      </h5>
      <div className="flex flex-col gap-2 items-start text-white text-xs md:text-sm font-light">
        {links.map((item, i) => (
          <Link key={i} to={item.path}>{item.label}</Link>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
