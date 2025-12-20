import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
import { Counter } from "./counter/Counter";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <Counter/>
        </Container>
    </StrictMode>
);