import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
import { AlertButton } from "./button/AlertButton";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <AlertButton text={"Click Me"} message={"You clicked me."} />
        </Container>
    </StrictMode>
);