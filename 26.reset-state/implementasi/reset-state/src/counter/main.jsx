import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { CounterVisibility } from "./CounterVisibility";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <CounterVisibility counterName={"Example"}/>
        </Container>
    </StrictMode>
);