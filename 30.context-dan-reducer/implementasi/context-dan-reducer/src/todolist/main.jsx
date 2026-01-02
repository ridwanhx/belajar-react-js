import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TodoApp } from "./TodoApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TodoApp/>
    </StrictMode>
);