// import packages
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";

// panggil method createRoot
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </StrictMode>
);
