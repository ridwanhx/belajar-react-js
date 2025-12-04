import { createRoot } from "react-dom/client";
import { HeaderHelloWorld, ParagraphHelloWorld } from "./ImplementasiJsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HeaderHelloWorld/>
        <ParagraphHelloWorld/>
    </StrictMode>
);