import React, { useState } from "react";

const SignUp = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  //error message
  const [requiredField, setRequiredField] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
  const [emailFormat, setEmailFormat] = useState("");

  //handle functions
  const handleName = (e) => {
    setClientName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleMobileNumber = (e) => {
    setMobile(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  //email validation
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+(\.\w{2,3})+$/);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!clientName || !email || !password || !mobile || !address) {
      setRequiredField("All fields are required");
    } else {
      setRequiredField("");
    }
    if (password.length < 6) {
      setPasswordLength("Password must have at least 6 characters");
    } else {
      setPasswordLength("");
    }
    if (!emailValidation(email)) {
      setEmailFormat("Enter a valid email");
    } else {
      setEmailFormat("");
    }
    if (clientName && email && password && mobile && address) {
      console.log(clientName, email, password, mobile, address);
      setClientName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-auto flex justify-center items-center ">
        <form className=" flex flex-col justify-center items-center w-72 py-20">
          <div className="w-full h-full flex justify-center items-center ">
            <h1 className="text-3xl font-roboto font-semibold py-6 z-40">
              SignUp!
            </h1>
          </div>
          <input
            onChange={handleName}
            value={clientName}
            type="text"
            placeholder="Name"
            className="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
          />

          <br />
          <input
            onChange={handleEmail}
            value={email}
            type="email"
            placeholder="email"
            className=" border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm lowercase"
          />
          {emailFormat && (
            <p className="text-red-600 text-xs font-semibold font-poppins ">
              {emailFormat}
            </p>
          )}

          <br />

          <input
            onChange={handlePassword}
            value={password}
            type="password"
            placeholder="Password"
            className="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
          />
          {passwordLength && (
            <p className="text-red-600 text-xs font-semibold font-poppins">
              {passwordLength}
            </p>
          )}
          <br />
          <input
            onChange={handleMobileNumber}
            value={mobile}
            type="text"
            placeholder="Mobile number"
            className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          <br />
          <input
            onChange={handleAddress}
            value={address}
            type="text"
            placeholder="Address"
            className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
          />
          {requiredField && (
            <p className="text-red-600 text-xs font-semibold font-poppins">
              {requiredField}
            </p>
          )}
          <br />
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={handleSignUp}
              type="submit"
              className="bg-gradient-to-r from-violet-300 to-fuchsia-400 text-lg py-1 px-6 rounded-sm flex"
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
