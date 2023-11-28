import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartAction";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    const itemWithQuantity = { ...data, quantity };
    dispatch(addToCart(itemWithQuantity));
    navigate("/cart");
  };

  
  useEffect(() => {
    getData();
  }, [params.id]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/products/getProductById/${params.id}`
      );
      setData(res.data);
      setQuantity(1);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleBuyNow = () => {

    navigate("/buy-now");
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse p-8">
          <div className="rounded-full h-12 w-12 bg-blue-700 mb-4"></div>
          <div className="h-4 bg-gray-700 w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-500 w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-900 w-3/4 mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-8 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
        <div className="w-full md:w-1/3 mx-auto mb-6">
          <img
            className="w-full h-auto object-contain"
            src={data.image}
            alt={data.title}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-700 mb-4">{data.title}</h2>
        <p className="text-lg text-red-500 mb-2 ">Price: US${data.price}</p>
        <p className="text-base text-blue-500 mb-2">
          Category: {data.category}
        </p>

        <h3 className="text-lg mt-4 text-black font-bold ">Description</h3>
        <div className="text-sm text-black leading-relaxed text-justify">
          <p>{data.description}</p>
        </div>
        <div className="mt-4">
          <label className="text-black font-bold   ">Add item Quantity</label>
        </div>
        <div className="mt-4 flex items-center justify-center ">
          <div className="">
            <button
              onClick={decreaseQuantity}
              className="quantity-button text-gray-700 px-3 mr-1 py-1 rounded bg-gray-300 hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              step="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className=" w-20 text-center px-1 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={increaseQuantity}
              className=" text-gray-700 px-3 py-1 ml-1 rounded  bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-row justify-center">
          <Link
            to="/products"
            className="px-6 py-4 text-base bg-blue-500 text-white rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-600"
          >
            Back
          </Link>
          <button
            onClick={handleBuyNow} // Handle Buy Now button click
            className="px-6 py-2 ml-6 text-base bg-orange-500 text-white rounded-lg cursor-pointer transition-colors duration-300 hover:bg-orange-600"
          >
            Buy Now
          </button>
          <button
            onClick={handlerAddToCart}
            className="px-6 py-3 ml-6 text-base bg-orange-500 text-white rounded-lg cursor-pointer transition-colors duration-300 hover:bg-orange-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
