import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { TaskForm } from "./TaskForm";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <TaskForm/>
        </Container>
    </StrictMode>
);