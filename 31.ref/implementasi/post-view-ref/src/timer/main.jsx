import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TimerApp } from "./TimerApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TimerApp/>
    </StrictMode>
)