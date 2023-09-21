import React from "react";
import i1 from '../assets/logo1.png'

const Login = () => {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center p-24 bg-[#3d7750]">
    <img src={i1} alt="" className="h-48"/>
      <form
        action=""
        className="h-full w-full flex justify-center items-center"
      >
        <div className="h-full w-[50%] flex flex-col gap-8 justify-center items-center">
          <h1 className="uppercase text-zinc-950 font-semibold  text-3xl">Login / Signup</h1>
          <input
            type="text"
            placeholder="Full Name"
            className=" w-[60%] outline outline-2 rounded-md capitalize outline-zinc-950 h-10 p-2 border-none bg-transparent text-white font-semibold border"
          />
          <input
            type="email"
            placeholder="Email"
            className=" w-[60%] outline outline-2 rounded-md outline-zinc-950 h-10 p-2 border-none bg-transparent text-white font-semibold border"
          />
          <input
            type="phone"
            placeholder="Mobile Number"
            className=" w-[60%] outline outline-2 rounded-md outline-zinc-950 h-10 p-2 border-none bg-transparent text-white font-semibold border"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className=" w-[60%] outline outline-2 rounded-md outline-zinc-950 h-10 p-2 border-none bg-transparent text-white font-semibold border"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className=" w-[60%] outline outline-2 rounded-md outline-zinc-950 h-10 p-2 border-none bg-transparent text-white font-semibold border"
          />
          <button
            type="submit"
            className=" h-10 w-40 bg-white rounded-md uppercase hover:scale-125 duration-200"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
