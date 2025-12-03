import { createRoot } from "react-dom/client";
import {HeaderHelloWorld, ParagraphHelloWorld } from "./MultipleComponent";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HeaderHelloWorld />
        <ParagraphHelloWorld/>
        <ParagraphHelloWorld/>
        <ParagraphHelloWorld/>
    </StrictMode>
)