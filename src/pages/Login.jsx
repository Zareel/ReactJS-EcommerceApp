import React from "react";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full auto flex items-center justify-center">
        <form className="flex flex-col items-center justify-center border-none w-72 py-48">
          <div className="w-full h-full flex justify-center items-center ">
            <h1 className="text-3xl font-roboto font-semibold py-6 z-40">
              Login!
            </h1>
          </div>
          <input
            type="email"
            placeholder="email"
            className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />
          <div className="w-full flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-300 to-fuchsia-400 text-lg py-1 px-6 rounded-sm flex"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
