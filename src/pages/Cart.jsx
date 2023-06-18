import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.storeReducer.products);
  return (
    <div className="w-full h-full">
      <div className="max-w-7xl mx-auto min-h-[79vh]">
        <div>
          <h1 className="text-5xl font-roboto font-bold py-10 ">Cart</h1>
        </div>
        <div className="w-full grid grid-cols-5 gap-8">
          <div className="w-full h-full col-span-4 flex justify-between">
            <div className="w-full flex justify-between ">
              <div>
                <h1 className="text-3xl font-roboto pb-6">Orders</h1>
                {products.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-full border-b-[1px] border-b-gray-300 flex justify-between"
                    >
                      <div className="w-full flex gap-12 ">
                        <img
                          className="w-32  my-8"
                          src={item.image}
                          alt="productImgs"
                        />
                        <div className="flex flex-col justify-center py-4">
                          <h1 className="text-gray-700 text-xl font-roboto font-semibold">
                            {item.title.substring(0, 20)}
                          </h1>
                          <p className="w-[300px] font-poppins text-gray-600 text-sm">
                            {item.description.substring(0, 60)}...
                          </p>
                          <p className="font-roboto font-semibold text-gray-600">
                            ${item.price}
                          </p>
                          <div className="flex gap-2">
                            <p className="font-poppins font-semibold text-red-700 text-xl cursor-pointer">
                              -
                            </p>
                            <p className="font-poppins font-semibold">
                              {item.quantity}
                            </p>
                            <p className="font-poppins font-semibold text-green-700 text-xl cursor-pointer">
                              +
                            </p>
                          </div>
                          <button className="bg-red-600 px-4 py-1 text-white font-semibold w-20 rounded-sm">
                            Delete
                          </button>
                        </div>
                        <div className="w-full h-full flex items-center">
                          <h2 className="text-xl font-roboto text-gray-600">
                            Item total:
                          </h2>
                          <p className="font-poppins font-semibold text-xl px-8 ">
                            $ {item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-full col-span-1">
            <h1 className="font-roboto font-semibold text-xl py-2 ">
              Cart Total
            </h1>
            <div className="w-full">
              <div className="w-full flex justify-between border-[1px] border-gray-400 px-2 py-1">
                <p className="text-lg font-semibold text-gray-700">Subtotal</p>
                <p className="text-lg font-semibold text-gray-700">$50</p>
              </div>
              <div className="w-full flex justify-between border-[1px] border-gray-400 px-2 py-1">
                <p className="text-lg font-semibold text-gray-700">
                  Shipping Charge
                </p>
                <p className="text-lg font-semibold text-gray-700">$20</p>
              </div>
              <div className="w-full flex justify-between border-[1px] border-gray-400 px-2 py-1">
                <p className="text-lg font-bold">Total</p>
                <p className="text-lg font-bold">$70</p>
              </div>
            </div>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-500 text-lg font-semibold py-1 text-white">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
