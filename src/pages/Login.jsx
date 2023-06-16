import React from "react";

const Login = () => {
  return (
    <div class="w-full h-full">
      <div class="w-full h-[79vh] relative">
        <div class="h-full bg-[url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)] bg-no-repeat bg-cover opacity-10 z-0 "></div>

        <form class="z-40 absolute top-40 left-[40%] border-none w-72">
          <div className="w-full h-full flex justify-center items-center ">
            <h1 className="text-3xl font-roboto font-semibold py-6 z-40">
              Login!
            </h1>
          </div>
          <input
            type="email"
            placeholder="email"
            class="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            class="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />
          <div class="w-full flex justify-center mt-4">
            <button
              type="submit"
              class="bg-gradient-to-r from-violet-300 to-fuchsia-400 text-lg py-1 px-6 rounded-sm flex"
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
