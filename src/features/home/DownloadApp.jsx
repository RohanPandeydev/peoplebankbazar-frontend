import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import ImagePath from "../../assets/images";
import ROUTE_PATHS from "../../routes/routePaths";


const DownloadApp = () => {
  const features = [
    "Compare different insurance policies",
    "Buy, store and share all your policies online",
    "Track your policy status on the go",
    "Download your policy with a single tap",
  ];

  return (
    <section className="bg-[#f6f9fa] py-8 lg:py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl sm:text-4xl md:text-2xl lg:text-4xl font-semibold text-black mb-3">
            Get the PeopleBankBazar app
          </h3>
          <p className="text-sm sm:text-md lg:text-xl text-gray-600 mb-4">
            Get control of all your insurance needs anywhere, anytime
          </p>
          <ul className="mt-4 space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm md:text-md lg:text-lg font-medium">
                <CiLocationArrow1 fontSize={24} color="#091A38" /> {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start mt-6">
            <p className="text-md md:text-xl font-medium">Download our app from</p>
            <div className="flex items-center gap-3 mt-4">
              <Link to={ROUTE_PATHS.HOME}>
                <img src={ImagePath.playStore} alt="Play Store" className="w-32 sm:w-36 lg:w-48 object-contain" />
              </Link>
              <Link to={ROUTE_PATHS.HOME}>
                <img src={ImagePath.appStore} alt="App Store" className="w-32 sm:w-36 lg:w-48 object-contain" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img src={ImagePath.downloadImg} alt="Download App" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
