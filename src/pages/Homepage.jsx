import React from "react";
import Carousel from "../home/Carousal";
import ProductsDisplay from "../home/ProductDisplay";
import Sale from "../home/Sale";

const Homepage = () => {
  return (
    <div>
      <Carousel />

      <Sale />
      <ProductsDisplay />
    </div>
  );
};

export default Homepage;
