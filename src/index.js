import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";

/* React BootStrap Configuration */
import "../node_modules/react-bootstrap/dist/react-bootstrap";

/*Configure the react bootstrap css as well */
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
