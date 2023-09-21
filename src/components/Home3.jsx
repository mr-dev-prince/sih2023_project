import React from "react";
import crop from "../assets/crop.png";

const Home3 = () => {
  return (
    <div className="h-[100vh] bg-[#4aa869]">
      <div className=" h-full w-full flex justify-around items-center">
        <div>
          <img src={crop} alt="" className=" h-[80%]"/>
        </div>
        <div className="w-[35%] flex flex-col gap-8">
          <h1 className="text-2xl uppercase font-bold text-white">
            Buy Best Quality Seed and fertilizer
          </h1>
          <p className="text-white font-medium tracking-wider">
            Unlock your garden's full potential with our premium seeds and
            fertilizer. Grow lush, vibrant plants effortlessly with our
            top-quality products. Elevate your gardening experience today!
            Discover the secret to bountiful harvests and vibrant blooms. Our
            meticulously selected seeds and nutrient-rich fertilizers guarantee
            a flourishing garden. Cultivate your green paradise with confidence
            and satisfaction.
          </p>
          <button className=" h-8 w-40 bg-white rounded-md uppercase hover:scale-125 duration-200">
            Go to Store
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Home3;
