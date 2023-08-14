import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/storeSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.storeReducer.products);
  const [subTotal, setSubTotal] = useState();
  const [shippingCharge, setShippingCharge] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return setSubTotal(price);
    });
    setSubTotal(price.toFixed(2));
  }, [products]);
  useEffect(() => {
    setShippingCharge((subTotal * 0.05).toFixed(2));
    setTotal(Number(subTotal) + Number(shippingCharge));
  }, [subTotal, shippingCharge]);
  return (
    <div className="w-full h-full">
      {products.length > 0 ? (
        <div className="max-w-7xl mx-auto min-h-[79vh]">
          <div>
            <h1 className="text-5xl font-roboto font-bold py-10 ">Cart</h1>
          </div>
          <div className="w-full grid grid-cols-5 gap-8">
            <div className="w-full h-full col-span-4 flex justify-between">
              <div className="w-full flex justify-between relative ">
                <div className="">
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
                              <p
                                onClick={() =>
                                  dispatch(decrementQuantity(item.id))
                                }
                                className="font-poppins font-semibold text-red-700 text-xl cursor-pointer"
                              >
                                -
                              </p>
                              <p className="font-poppins font-semibold">
                                {item.quantity}
                              </p>
                              <p
                                onClick={() =>
                                  dispatch(incrementQuantity(item.id))
                                }
                                className="font-poppins font-semibold text-green-700 text-xl cursor-pointer"
                              >
                                +
                              </p>
                            </div>
                            <button
                              onClick={() => dispatch(deleteItem(item.id))}
                              className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-4 py-1 text-white font-semibold w-20 rounded-sm"
                            >
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
                <h1
                  onClick={() => dispatch(resetCart())}
                  className="absolute right-56 top-1 text-lg cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500  px-4 py-1 rounded-sm"
                >
                  Clear Cart
                </h1>
              </div>
            </div>

            <div className="w-[350px] fixed right-56  col-span-1">
              <h1 className="font-roboto font-semibold text-xl py-2 ">
                Cart Total
              </h1>
              <div className="w-full">
                <div className="w-full flex justify-between border-[1px] border-gray-400 px-2 py-1">
                  <p className="text-lg font-semibold text-gray-700">
                    Subtotal
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    ${subTotal}
                  </p>
                </div>
                <div className="w-full flex justify-between border-[1px] border-gray-400 px-2 py-1">
                  <p className="text-lg font-semibold text-gray-700">
                    Shipping Charge 5%
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    ${shippingCharge}
                  </p>
                </div>
                <div className="w-full flex justify-between border-[1px] border-gray-400 px-2 py-1">
                  <p className="text-lg font-bold">Total</p>
                  <p className="text-lg font-bold">${total}</p>
                </div>
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-500 text-lg font-semibold py-1 text-white">
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl font-roboto">Your Cart is Empty</h1>
          <button className="text-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500  px-8 py-2 rounded-sm">
            Back to Homepage
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
