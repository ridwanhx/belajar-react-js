import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { Task } from "./Task";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <Task/>
        </Container>
    </StrictMode>
);