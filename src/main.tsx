import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // assuming App is a default export in a .ts file
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
);
