import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgdata } from "../utils/imgdata";

const SimpleSlibeBar = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "transparent",
          position: "absolute",
          top: "50%",
          right: "0",
          width: "80px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "transparent",
          position: "absolute",
          top: "50%",
          left: "0",
          zIndex: 1,
          width: "80px",
          height: "100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
         
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full h-[95vh] bg-orange">
      <Slider {...settings} >
        {imgdata.map((item, index) => (
          <div key={index}>
            <img src={item} alt=""  />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlibeBar;
