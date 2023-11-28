
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/cartAction";
import { clearCart } from "../Redux/cartAction";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap shadow-md my-10">
          <div className="lg:w-3/4 md:w-full sm:w-full bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/2">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3 text-center">
                Price
              </h3>
            </div>
            {cartItems.map((item) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={item.id}
              >
                <div className="flex w-1/2">
                  <div className="w-20">
                    <img className="h-24" src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className="font-bold text-sm">${item.price}</span>
                    <span className="text-sm">{item.category}</span>
                    <button
                      className="font-semibold hover:bg-red-500 hover:text-white bg-gray-300 text-xs py-1 px-3 rounded w-20"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/3">{item.quantity}</div>
                <span className="text-center w-1/3 font-semibold text-sm">
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}

            <Link
              to="/products"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg className="mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div className="lg:w-1/4 md:w-1/2 sm:w-full px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            {/* Add styling for Order Summary */}
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalCost}</span>
              </div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 font-semibold py-3 text-sm text-white uppercase w-full"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "../Redux/cartAction";
// import { clearCart } from "../Redux/cartAction";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cartItems);
//   const totalCost = cartItems.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );

//   const handleRemoveFromCart = (item) => {
//     dispatch(removeFromCart({ id: item.id }));
//   };

//   const handleCheckout = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div>
//       <div className="container mx-auto mt-10">
//         <div className="flex shadow-md my-10">
//           <div className="lg:w-3/4 md:w-full sm:w-full bg-white px-10 py-10">
//             <div className="flex justify-between border-b pb-8">
//               <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//               <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
//             </div>
//             <div className="flex mt-10 mb-5">
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/2">
//                 Product Details
//               </h3>
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3 text-center">
//                 Quantity
//               </h3>
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3 text-center">
//                 Price
//               </h3>
//             </div>
//             {cartItems.map((item) => (
//               <div
//                 className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
//                 key={item.id}
//               >
//                 <div className="flex w-1/2">
//                   <div className="w-20">
//                     <img className="h-24" src={item.image} alt="" />
//                   </div>
//                   <div className="flex flex-col justify-between ml-4 flex-grow">
//                     <span className="font-bold text-sm">{item.title}</span>
//                     <span className="font-bold text-sm">${item.price}</span>
//                     <span className="text-sm">{item.category}</span>
//                     <button
//                       className="font-semibold hover:bg-red-500 hover:text-white bg-gray-300 text-xs py-1 px-3 rounded w-20"
//                       onClick={() => handleRemoveFromCart(item)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex justify-center w-1/3">{item.quantity}</div>
//                 <span className="text-center w-1/3 font-semibold text-sm">
//                   ${item.price * item.quantity}
//                 </span>
//               </div>
//             ))}

//             <Link
//               to="/products"
//               className="flex font-semibold text-indigo-600 text-sm mt-10"
//             >
//               <svg className="mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
//                 <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
//               </svg>
//               Continue Shopping
//             </Link>
//           </div>

//           <div className="lg:w-1/4 md:w-1/2 sm:w-full px-8 py-10">
//             <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//             {/* Add styling for Order Summary */}
//             <div></div>
//             <div className="py-10"></div>
//             <div className="border-t mt-8">
//               <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//                 <span>Total cost</span>
//                 <span>${totalCost}</span>
//               </div>
//               <button
//                 className="bg-indigo-500 hover:bg-indigo-600 font-semibold py-3 text-sm text-white uppercase w-full"
//                 onClick={handleCheckout}
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "../Redux/cartAction";
// import { clearCart } from "../Redux/cartAction";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cartItems);
//   const totalCost = cartItems.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );

//   const handleRemoveFromCart = (item) => {
//     dispatch(removeFromCart({ id: item.id }));
//   };
//   const handleCheckout = () => {
//     // Clear the cart when checking out
//     dispatch(clearCart());
//   };

//   return (
//     <div>
//       <div className="container mx-auto mt-10">
//         <div className="flex shadow-md my-10">
//           <div className="w-3/4 bg-white px-10 py-10">
//             <div className="flex justify-between border-b pb-8">
//               <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//               <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
//             </div>
//             <div className="flex mt-10 mb-5">
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/2">
//                 Product Details
//               </h3>
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3 text-center">
//                 Quantity
//               </h3>
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3 text-center">
//                 Price
//               </h3>
//             </div>
//             {cartItems.map((item) => (
//               <div
//                 className="flex items-center hover-bg-gray-100 -mx-8 px-6 py-5"
//                 key={item.id}
//               >
//                 <div className="flex w-1/2">
//                   <div className="w-20">
//                     <img className="h-24" src={item.image} alt="" />
//                   </div>
//                   <div className="flex flex-col justify-between ml-4 flex-grow">
//                     <span className="font-bold text-sm">{item.title}</span>
//                     <span className="font-bold text-sm">${item.price}</span>
//                     <span className="text-sm">{item.category}</span>
//                     <button
//                       className="font-semibold  hover-text-white bg-gray-300 text-xs py-1 px-3 rounded w-20  "
//                       onClick={() => handleRemoveFromCart(item)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex justify-center w-1/3">{item.quantity}</div>
//                 <span className="text-center w-1/3 font-semibold text-sm">
//                   ${item.price * item.quantity}
//                 </span>
//               </div>
//             ))}

//             <Link
//               to="/products"
//               className="flex font-semibold text-indigo-600 text-sm mt-10"
//             >
//               <svg className="mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
//                 <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
//               </svg>
//               Continue Shopping
//             </Link>
//           </div>

//           <div className="w-1/4 px-8 py-10">
//             <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//             <div></div>
//             <div className="py-10"></div>
//             <div className="border-t mt-8">
//               <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//                 <span>Total cost</span>
//                 <span>${totalCost}</span>
//               </div>
//               <button className="bg-indigo-500 font-semibold hover-bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={handleCheckout}>
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
