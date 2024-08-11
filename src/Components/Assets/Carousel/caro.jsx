import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Caro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {["RedGirl.png", "Sofa.png", "TwoPhone.png", "Two.png", "PhoneCaro.png"].map((img, index) => (
        <div key={index}>
          <img src={`./Pics/${img}`} alt={`img${index + 1}`} onError={(e) => e.target.src = './Pics/placeholder.png'} />
        </div>
      ))}
    </Slider>
  );
}
