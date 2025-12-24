import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
// import { Counter } from "./Counter";
import { CounterApp } from "./CounterApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <CounterApp/>
        </Container>
    </StrictMode>
);