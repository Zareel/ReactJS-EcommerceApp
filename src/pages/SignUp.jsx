import React from "react";

const SignUp = () => {
  return (
    <div class="w-full h-full">
      <div class="w-full h-[79vh] relative">
        <div class="h-full bg-[url(https://plus.unsplash.com/premium_photo-1661764072587-0050cc57ac17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-no-repeat bg-cover opacity-10  z-0 "></div>

        <form class="z-40 absolute top-24 left-[40%] border-none w-72">
          <div className="w-full h-full flex justify-center items-center ">
            <h1 className="text-3xl font-roboto font-semibold py-6 z-40">
              SignUp!
            </h1>
          </div>
          <input
            type="text"
            placeholder="Name"
            class="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
          />
          <br />
          <input
            type="email"
            placeholder="email"
            class="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            class="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
          />
          <br />
          <input
            type="text"
            placeholder="Mobile number"
            class="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            class="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />
          <div class="w-full flex justify-center mt-4">
            <button
              type="submit"
              class="bg-gradient-to-r from-violet-300 to-fuchsia-400 text-lg py-1 px-6 rounded-sm flex"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
