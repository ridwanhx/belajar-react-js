import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { FormContact } from "./FormContact";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <FormContact/>
        </Container>
    </StrictMode>
);