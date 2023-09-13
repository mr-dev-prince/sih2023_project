import React from "react";
import { HashLink } from "react-router-hash-link";
import farmer from "../assets/farmerpng.png";
import Home2 from "./Home2";
import Home3 from "./Home3";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-[#60712f] pt-24">
        <div className=" w-full flex justify-center items-center text-5xl font-bold">
          From Soil to Screen, Your Agricultural Hub.
        </div>
        <div className=" w-full flex justify-center items-center mt-8">
          <h1 className="uppercase text-6xl font-bold text-green-400">
            "Agritech"
          </h1>
        </div>
        <div className=" w-full flex mt-12 justify-around items-center z-5">
          <div>
            <img src={farmer} alt="" className="h-full" />
          </div>
          <div className=" w-[45%] flex justify-center flex-col items-center">
            <h1 className=" uppercase text-2xl font-bold text-white">
              Our Services
            </h1>
            <div className="flex w-full justify-evenly gap-8 mt-4">
              <div className="flex flex-col gap-8 w-full">
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Buy Seed and Fertilizers
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Sell Your Crops
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Rent Equipments
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Get Recommendations
                  </h1>
                </HashLink>
              </div>
              <div className="flex flex-col gap-8 w-full">
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Tutorials and Guide
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Track your crop
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Crop Disease Solutions
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex justify-center items-center bg-green-900 text-white rounded-md">
                    Weather Reports
                  </h1>
                </HashLink>
              </div>
            </div>
            <HashLink to={"/login"}>
              {" "}
              <button className=" h-10 w-40 mt-10 bg-white rounded-md uppercase hover:scale-125 duration-200">
                {" "}
                Get Started
              </button>
            </HashLink>
          </div>
        </div>
      </div>
      <Home2 />
      <Home3 />
    </>
  );
};

export default Home;
