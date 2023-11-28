import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient-to-r from-gray-700 to-blue-400 p-4 md:p-10 rounded-lg m-4 md:m-10 flex flex-col md:flex-row justify-around">
        <div className="w-full md:w-2/5 ml-4 md:ml-10 flex flex-col justify-center text-white text-lg">
          <h3 className="text-center md:text-left">
            Discover the perfect blend of elegance and comfort with our
            enchanting Fall Collection
          </h3>
          <h5 className="text-center md:text-left">Shop Smart, Shop with Us</h5>
          <div className="flex justify-center md:justify-start">
            <button
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded mr-1"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
            <button className="">Learn More</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-64 w-64 md:h-96 md:w-96"
            src="https://assets.website-files.com/6493dcfff5da93a7486cd781/6494062b71fbb5f238835e71_Hero.png"
            alt=""
          />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Home;
