import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";

const socials = [
  { icon: <FaFacebookF />, link: "" },
  { icon: <RiTwitterXFill />, link: "" },
  { icon: <FaLinkedinIn />, link: "" },
  { icon: <IoLogoYoutube />, link: "" },
];

const FooterSocial = () => {
  return (
    <div className="flex flex-col items-start gap-3 mt-5">
      <h5 className="text-lg uppercase font-semibold text-white">Follow us on</h5>
      <div className="flex items-center gap-3">
        {socials.map((s, i) => (
          <Link
            key={i}
            to={s.link}
            className="bg-[#000] py-2 px-4 flex items-center justify-center text-white rounded-md hover:bg-blue-600 transition-all ease-in-out duration-500"
          >
            {s.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
