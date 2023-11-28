
import React, { useContext } from "react";
import { authContext } from "../Context";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/index";
import { FaHome, FaProductHunt, FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi"; 
import logoImage from "../../image/img.jpg";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { isLoged, setIsLoged } = useContext(authContext);
  const cartItems = useSelector((state) => state.cartItems);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="text-yellow-900 font-bold mr-20">
        <div className="mx-auto mr-2">
          <div className="flex flex-col md:flex-row justify-between items-center md:h-20">
            <div className="md:ml-10">
              <img src={logoImage} alt="Alfa Mart Logo" className="w-40 h-20" />
            </div>
            <div className="md:w-64 lg:w-96">
              <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-around">
                <NavLink to="/" className="flex items-center hover:text-black">
                  <FaHome className="md:text-xl" /> Home
                </NavLink>
                <NavLink to="/Products" className="flex items-center hover:text-black">
                  <FaProductHunt className="md:text-xl" /> Products
                </NavLink>
                <NavLink to="/category" className="flex items-center hover:text-black">
                <FaProductHunt className="md:text-xl" /> Category
                </NavLink>
                {isLoged ? (
                  <NavLink to="/cart" className="flex items-center hover:text-black relative">
                    <FiShoppingCart className="md:text-xl" /> Cart
                    {totalItemsInCart > 0 && (
                      <div className="bg-black text-white rounded-full w-4 h-4 text-xs absolute -top-2 ml-2 mt- flex items-center justify-center">
                        {totalItemsInCart}
                      </div>
                    )}
                  </NavLink>
                ) : (
                  <NavLink to="/cart" className="flex items-center hover:text-black">
                    <FiShoppingCart className="md:text-xl" /> Cart
                  </NavLink>
                )}
                {isLoged ? (
                  <button
                    onClick={() => {
                      setIsLoged(false);
                    }}
                    className="flex items-center hover-text-black"
                  >
                    <FaSignOutAlt className="md-text-xl" /> Logout
                  </button>
                ) : (
                  <>
                    <NavLink to="/login" className="flex items-center hover:text-black">
                      <FaSignInAlt className="md:text-xl" /> Login
                    </NavLink>
                    <NavLink to="/signup" className="flex items-center hover-text-black">
                      <FaUserPlus className="md-text-xl" /> SignUp
                    </NavLink>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;

