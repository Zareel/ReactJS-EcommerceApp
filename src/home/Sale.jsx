import React from "react";
import homeImg from "../assets/homepageImg/home.webp";
import homeImg1 from "../assets/homepageImg/home1.webp";
import homeImg2 from "../assets/homepageImg/home2.webp";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="w-full h[400px] my-6 px-16">
      <h1 className="text-4xl text-center text-gray-800 font-semibold font-roboto py-10">
        Special Offer
      </h1>
      <div className="max-w-8xl mx-auto grid grid-cols-5 gap-10">
        <Link to="/products" className="w-full col-span-2 object-cover">
          <img className="w-full h-[75vh]  " src={homeImg} alt="" />
        </Link>
        <Link to="/products" className="w-full col-span-3 object-cover">
          <img className="w-full h-80 mb-6 " src={homeImg1} alt="" />
          <img className="w-full h-80 object-cover " src={homeImg2} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Sale;
