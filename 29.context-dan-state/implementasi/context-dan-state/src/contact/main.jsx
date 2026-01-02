import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ContactApp } from "./ContactApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContactApp/>
    </StrictMode>
);