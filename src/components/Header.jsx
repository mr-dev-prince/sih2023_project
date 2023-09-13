import React from "react";
import { HashLink } from "react-router-hash-link";
import Home from "./Home";
import i1 from '../assets/logo1.png'
import Login from "./Login";

const Header = () => {
  return (
    <div className=" w-full h-12 bg-[#224870] flex justify-between p-8 items-center fixed">
      <div><img src={i1} alt="" className=" h-16 " /></div>
      <div className=" flex gap-16 uppercase font-bold text-white">
        <HashLink to="/" component={<Home/>}>Home</HashLink>
        <HashLink to="/store" component={<Home/>}>Store</HashLink>
        <HashLink to="/sell" component={<Home/>}>Sell</HashLink>
        <HashLink to="/tutorials" component={<Home/>}>Tutorials</HashLink>
        <HashLink to="/services" component={<Home/>}>Services</HashLink>
        <HashLink to="/about" component={<Home/>}>About</HashLink>
      </div>
      <HashLink to="/login" component={<Login/>}><button className=" h-8 w-20 bg-white rounded-md uppercase hover:scale-125 duration-200">Login</button></HashLink>
    </div>
  );
};

export default Header;
