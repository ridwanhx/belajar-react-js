import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TaskApp } from "./TaskApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TaskApp/>
    </StrictMode>
);