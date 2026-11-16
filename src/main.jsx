import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EtudiantsProvider } from "./context/EtudiantsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EtudiantsProvider>
      <App />
    </EtudiantsProvider>
  </React.StrictMode>
);