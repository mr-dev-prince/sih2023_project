import React from "react";
import { HashLink } from "react-router-hash-link";
import farmer2 from "../assets/farmerjee.png";
import Home2 from "./Home2";
import Home3 from "./Home3";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-[#50c878] pt-24">
        <div> 
          <div className=" w-full flex justify-center items-center text-5xl font-bold">
            From Soil to Screen, Your Agricultural Hub.
          </div>
          <div className=" w-full flex justify-center items-center mt-8">
            <h1 className="uppercase text-6xl font-bold text-orange-900">
              "Agritech"
            </h1>
          </div>
        </div>
        <div className=" w-full h-[70%]  flex mt-12 justify-between p-8 items-center">
          <div className="w-[48%] h-full flex justify-center items-center">
            <img className=" h-full" src={farmer2} alt=""/>
          </div>
          <div className=" w-[50%] flex justify-center flex-col items-center gap-8">
            <h1 className=" uppercase text-4xl font-bold text-white">
              Our Services
            </h1>
            <p className=" text-white font-semibold text-lg ">We Provide the best in class services for all the agricultural activities. This is the only website you need.</p>
            <div className="flex w-full justify-evenly gap-12">
              <div className="flex flex-col gap-12 w-full">
                <HashLink>
                  <h1 className=" w-[100%] h-12 font-semibold uppercase flex justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Buy Seed and Fertilizers
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105  duration-200">
                    Sell Your Crops
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Rent Equipments
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Get Recommendations
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Export Services
                  </h1>
                </HashLink>
              </div>
              <div className="flex flex-col gap-12 w-full">
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105  duration-200">
                    Cold Store / Hot store
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Track your crop
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Crop Disease Solutions
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Weather Reports
                  </h1>
                </HashLink>
                <HashLink>
                  <h1 className=" w-[100%] h-12 flex uppercase font-semibold justify-center items-center bg-orange-900 text-white rounded-md hover:bg-green-700 hover:scale-105 duration-200">
                    Tutorials and guides
                  </h1>
                </HashLink>
              </div>
            </div>
            <HashLink to={"/login"}>
              {" "}
              <button className=" h-10 w-80 mt-10 bg-white rounded-md uppercase hover:scale-105 duration-200">
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
