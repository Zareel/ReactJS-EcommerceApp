import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validation
  const [requiredField, setRequiredField] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setRequiredField("All fields are required");
    } else {
      setRequiredField("");
    }
    if (email && password) {
      console.log(email, password);
      setEmail("");
      setPassword("");
    }
  };
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
            onChange={handleEmail}
            type="email"
            value={email}
            placeholder="email"
            className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />

          <input
            onChange={handlePassword}
            type="password"
            value={password}
            placeholder="Password"
            className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          {requiredField && (
            <p className="text-red-600 text-xs font-semibold">
              {requiredField}
            </p>
          )}
          <br />
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={handleLogin}
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
