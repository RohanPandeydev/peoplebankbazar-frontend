import React from "react";
import Slider from "react-slick";
import ImagePath from "../../assets/images";

const AdvertiseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const advertiseSlider = [
    ImagePath.adSlider1,
    ImagePath.adSlider2,
    ImagePath.adSlider3,
    ImagePath.adSlider4,
    ImagePath.adSlider5,
    ImagePath.adSlider6,
  ];

  return (
    <div className="w-full py-8">
      <Slider {...settings}>
        {advertiseSlider.map((slide,index) => (
          <div key={index} className="sm:pr-3">
            <img
              src={slide}
              alt="Insurance Banner"
              className="h-full w-full sm:h-auto sm:w-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvertiseSlider;
