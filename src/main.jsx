
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import cartStore from "./Redux/cartStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate from the correct location

const persistor = persistStore(cartStore);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={cartStore}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
