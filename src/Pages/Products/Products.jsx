import React from "react";
import { useNavigate } from "react-router";

function Products(props) {
  const navigate = useNavigate();

  return (
    <div className="w-80    p-2  rounded-md   drop-shadow-2xl">
      <div className="text-center rounded-lg bg-white p-3 hover:drop-shadow-md">
        <div className="w-full h-64 object-cover">
          <img
            className="w-full h-full object-contain"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="text-lg mt-2">
          <h1>{props.title.substr(0, 18)}</h1>
        </div>
        <div className="category mt-1">
          {/* <p className="font-bold ...">{props.category.toUpperCase()}</p> */}
        </div>
        <div className="price mt-2">
          <p className="text-teal-500">${props.price}</p>
        </div>
        <p className="text-blue-700">{props.rating.rate}</p>

        <div className="mt-4">
          <button
            className=" text-white px-4 py-2 rounded-md transition duration-300 bg-orange-400 hover:text-white md:hover:bg-yellow-900  md:hover:text-white"
            onClick={() => {
              navigate(`/productdetail/${props.id}`);
            }}
          >
            Product Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
