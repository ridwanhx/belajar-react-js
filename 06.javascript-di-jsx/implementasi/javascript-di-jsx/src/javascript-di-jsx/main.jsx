import { createRoot } from "react-dom/client";
import { HeaderHelloWorld, PharagraphHelloWorld } from "./JavaScriptJsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HeaderHelloWorld />
        <PharagraphHelloWorld/>
        <PharagraphHelloWorld/>
    </StrictMode>
);