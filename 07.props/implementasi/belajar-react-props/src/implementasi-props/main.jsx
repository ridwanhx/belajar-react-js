import { createRoot } from "react-dom/client";
import { HeaderHelloWorld, SubHeaderHelloWorld, ParagraphHelloWorld } from "./ImplementasiProps";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* Tanpa Mengirim Props */}
        <HeaderHelloWorld />
        
        {/* Mengirim Props */}
        <HeaderHelloWorld text="Hello, World!" />

        {/* Implementasi Spread Syntax */}
        <SubHeaderHelloWorld/>
        <ParagraphHelloWorld/>
    </StrictMode>
);