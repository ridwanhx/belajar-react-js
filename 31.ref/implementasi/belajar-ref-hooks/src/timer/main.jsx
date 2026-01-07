import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../util/Container";
import { Timer } from "./Timer";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <Timer/>
        </Container>
    </StrictMode>
);