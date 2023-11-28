import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Category() {
  const [products, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        // "https://fakestoreapi.com/products/categories"
        "http://localhost:3000/category/getCategory"
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-center mt-8 font-bold text-lg">
        {loading ? <p>Loading...</p> : <h1>All Categories</h1>}
      </div>

      <div className="flex flex-wrap p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <Link to={`/products/${item}`} key={item}>
              <li className="p-4 border border-gray-300 rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
