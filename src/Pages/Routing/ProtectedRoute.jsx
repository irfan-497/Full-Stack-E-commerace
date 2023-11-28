// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const ProtectRoute = (props) => {
//   const { Pages } = props;
//   const navigate = useNavigate();

//   useEffect(() => {
//     let login = localStorage.getItem("login");
//     if (!login) {
//       navigate("/Login");
//     }
//   }, []);

//   return (
//     <div>
//       <Pages />
//     </div>
//   );
// };

// export default ProtectRoute;
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { authContext } from "../../Components/Context";

const ProtectedRoute = ({ children }) => {
  const {isLoged} = useContext(authContext);
  console.log(isLoged );

  return <>{isLoged ? children : <Navigate to="/login" /> }</>;
};

export default ProtectedRoute;
