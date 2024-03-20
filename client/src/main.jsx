import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Store from "./Features/Store.js";
import "./index.css";
import AuthContextProvider from "./Context/Auth/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
