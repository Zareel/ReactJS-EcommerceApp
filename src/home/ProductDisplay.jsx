import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductsDisplay = () => {
  const data = useLoaderData();
  const productData = data.data;
  //console.log(productData);

  return (
    <div className="w-[100vw] h-auto">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 p-6">
        {productData.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img
                  className="w-56 h-64 object-contain"
                  src={item.image}
                  alt="ProductImg"
                />
              </div>
              <div>
                <h2>{item.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsDisplay;
