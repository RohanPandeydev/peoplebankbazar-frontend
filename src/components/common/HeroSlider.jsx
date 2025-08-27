import React from "react";
import Slider from "react-slick";
import ImagePath from "../../assets/images";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true, // Enable centered view with partial prev/next slides
    centerPadding: "20%",
  };

  const bannerSlider = [
    ImagePath.BnrSlide1,
    ImagePath.BnrSlide2,
    ImagePath.BnrSlide3,
  ];
  return (
    <div className="w-full mx-auto ">
      <Slider {...settings}>
        {bannerSlider.map((slide, index) => (
          <div key={index} className="pr-5">
            <img
              src={slide}
              alt="Insurance Banner"
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
