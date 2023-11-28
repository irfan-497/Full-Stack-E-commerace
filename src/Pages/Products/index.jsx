import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";
import { useParams, Link } from "react-router-dom"; 

function Index() {
  const {categoryID} = useParams();
  const [products, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortState, setSortState] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [productCategory]);

  const getData = async () => {
    try {
      let url = "http://localhost:3000/products/getProduct";

      if (categoryID) {
        // url = `https:fakestoreapi.com/products/category/${productCategory}`;
        url = `http://localhost:3000/category/getCategory/${categoryID}`;

      }

      const res = await axios.get(url);

      if (res.status === 200) {
        setData(res.data);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const filterProducts = products.filter((product) => {
    const titleMatch = product.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const priceMatch =
      (minPrice === 0 || product.price >= minPrice) &&
      (maxPrice === 0 || product.price <= maxPrice);
    return titleMatch && priceMatch;
  });

  let sortedProducts = [...filterProducts];
  if (sortState === "ascending") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortState === "descending") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-8 font-bold text-lg">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <h1>{productCategory ? productCategory : "All Products"}</h1>
        )}
      </div>
      <div className="p-4 relative flex">
        <input
          className="border-2 border-black px-4 py-1 focus:outline-none rounded-md transition duration-300 hover:drop-shadow-2xl"
          type="text"
          placeholder="Search Products"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <div className="flex ">
          <select
            value={sortState}
            onChange={(e) => setSortState(e.target.value)}
          >
            <option value="none">A to Z</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      {productCategory && ( 
        <div className="mb-4">
          <Link to="/Products">Back to All Products</Link>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => {
            setMinPrice(0);
            setMaxPrice(0);
          }}
          className="bg-slate-700 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Show All
        </button>
        <button
          onClick={() => {
            setMinPrice(0);
            setMaxPrice(10);
          }}
          className="bg-slate-700 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Show Min Price
        </button>
        <button
          onClick={() => {
            setMinPrice(50);
            setMaxPrice(0);
          }}
          className="bg-slate-700 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Show Max Price
        </button>
      </div>

      <div className="flex flex-wrap justify-evenly pt-10  ">
        {sortedProducts.map((item, index) => (
          <Products
            key={item.id}
            id={item.id}
            image={item.image}
            category={item.category}
            title={item.title}
            price={item.price}
            rating={item.rating}
            description={item.description}
            count={item.rating.count}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
