import { createRoot } from "react-dom/client";
import { HeaderHelloWorld, ParagraphHelloWorld } from "./ImplementasiProps";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* Tanpa Mengirim Props */}
        <HeaderHelloWorld />
        
        {/* Mengirim Props */}
        <HeaderHelloWorld text="Hello, World!" />
        <ParagraphHelloWorld/>
    </StrictMode>
);