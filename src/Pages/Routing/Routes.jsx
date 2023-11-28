import React from "react";
import Home from "../../Pages/Home";
import Cart from "../../Pages/Cart";
import Products from "../../Pages/Products/index";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
// import SignUp from "./Pages/SignUp";
import { SignUp } from "../../Pages/SignUp";
import Login from "../../Pages/Login";
import PageNotFound from "../../Pages/PageNotFound";
import ProductDetail from "../../Pages/ProductDetail";
import UserDetail from "../../Pages/UserDetail";
import User from "../../Pages/User";
import Category from '../Category/Category'
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "../../Components/Context";
import BuyNowForm from "../BuyNow";
const MyRoutes = () => {
  return (
    <>
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />}></Route>
              <Route
                path="products"
                element={
                  // <ProtectedRoute>
                  <Products />
                  // </ProtectedRoute>
                }
                />
                 <Route
                path="products/:productCategory"
                element={
                  // <ProtectedRoute>
                  <Products />
                  // </ProtectedRoute>
                }
                />
            </Route>
            <Route path="PageNotFound" element={<PageNotFound />} />
            <Route path="/category" element={<Category />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
                <Route path="cart" element={ <ProtectedRoute><Cart /></ProtectedRoute>}> </Route>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="buy-now" element={<BuyNowForm />} />
            <Route path="users/:userId" element={<UserDetail />}></Route>
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
};

export default MyRoutes;
