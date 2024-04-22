import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ActiveKeysProvider } from "./components/Context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveKeysProvider>
      <App />
    </ActiveKeysProvider>
  </React.StrictMode>
);
