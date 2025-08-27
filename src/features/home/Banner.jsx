import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { MdChecklist } from "react-icons/md";
import HeroSlider from "../../components/common/HeroSlider";

const Banner = () => {
  return (
    <div className="flex-col-reverse sm:flex-row gap-5 flex justify-between items-center min-h-[180px] xl:min-h-[250px] h-full ">
      <div className="w-full sm:w-6/12 lg:w-4/12 flex flex-col gap-5 mt-5">
        <h1 className="text-[24px] sm:text-[32px] lg:text-[38px] 2xl:text-[42px] font-light text-gray-600  leading-[30px] sm:leading-[50px] xl:leading-[64px]">
          Let's find you the <span className="font-semibold text-[24px] sm:text-[34px] lg:text-[44px] 2xl:text-[48px] text-[#253858]">Best Insurance</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 lg:gap-5">
          <div className="w-full flex items-center gap-3">
            <MdChecklist fontSize={16} className="w-[30px] h-[30px] lg:w-[25%] lg:h-[25%] xl:w-[20%] xl:h-[20%] p-1 xl:p-2 border-2 text-[#776bfd] border-[#776bfd] rounded-full"/>
            <p className="text-[#776bfd] text-lg sm:text-sm font-normal">51 insurers offering lowest prices</p>
          </div>
          <div className="flex items-center gap-3">
            <BsLightningCharge fontSize={16} className="w-[30px] h-[30px] lg:w-[25%] lg:h-[25%] xl:w-[20%] xl:h-[20%] p-1 xl:p-2 border-2 text-[#ff9b2c] border-[#ff9b2c] rounded-full"/>
            <p className="text-[#ff9b2c] text-lg sm:text-sm font-light">Quick, easy & hassle free</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-6/12 md:w-7/12 ">
        <HeroSlider/>
      </div>
    </div>
  );
};

export default Banner;
