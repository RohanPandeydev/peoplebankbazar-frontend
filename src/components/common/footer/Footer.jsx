import React from "react";
import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";
import ImagePath from "../../../assets/images";
const Footer = () => {
  const columns = [
    {
      title: "Loans",
      links: [
        { label: "Credit Card", path: "/" },
        { label: "Personal Loan", path: "/" },
        { label: "Business Loan", path: "/" },
        { label: "Home Loan", path: "/" },
        { label: "Education Loan", path: "/" },
        { label: "Car Loan", path: "/" },
        { label: "Gold Loan", path: "/" },
        { label: "Loan Against Property", path: "/" },
        { label: "Transfer Home Loan", path: "/" },
      ],
    },
    {
      title: "Calculators",
      links: [
        { label: "SIP Calculator", path: "/" },
        { label: "Personal Loan Calculator", path: "/" },
        { label: "Home Loan Calculator", path: "/" },
        { label: "Business Loan Calculator", path: "/" },
        { label: "Education Loan Calculator", path: "/" },
        { label: "Gold Loan Calculator", path: "/" },
        { label: "Car Loan Calculator", path: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Home", path: "/" },
        { label: "Hot Offers", path: "/" },
        { label: "Contact us", path: "/" },
        { label: "Sitemap", path: "/" },
      ],
    },
  ];

  return (
    <div className="bg-[#091A38] pt-6 md:pt-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-8">
          {columns.map((col, i) => (
            <FooterColumn key={i} title={col.title} links={col.links} />
          ))}

          <div className="flex flex-col items-start gap-3">
            <h5 className="text-lg uppercase font-semibold text-white">
              Payment Methods
            </h5>
            <img src={ImagePath.Payment} alt="payment" className="w-full h-full object-contain" />
            <FooterSocial />
          </div>
        </div>

        <hr className="text-[#464545] font-light" />
        <div className="flex justify-center text-center text-xs text-white font-semibold pt-4 pb-6">
          <p>© Copyright 2025 peoplebankbazaar.com. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
