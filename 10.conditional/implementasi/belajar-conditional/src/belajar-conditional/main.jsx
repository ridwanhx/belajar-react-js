import { createRoot } from "react-dom/client";
import { Container } from "./Container";
import { HelloWorld } from "./HelloWorld";
import { TodoList } from "./TodoList";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList/>
        </Container>
    </StrictMode>
)