import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { TodoApp } from "./TodoApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <TodoApp/>
        </Container>
    </StrictMode>
)