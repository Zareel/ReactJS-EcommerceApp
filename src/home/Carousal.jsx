import React from "react";
import Slider from "react-slick";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="h-[500px] w-[100vw]" src={img1} alt="image1" />
        </div>
        <div>
          <img className="h-[500px] w-[100vw]" src={img2} alt="image2" />
        </div>
        <div>
          <img className="h-[500px] w-[100vw]" src={img3} alt="image3" />
        </div>
        <div>
          <img className="h-[500px] w-[100vw]" src={img4} alt="image4" />
        </div>
        <div>
          <img className="h-[500px] w-[100vw]" src={img5} alt="image5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
