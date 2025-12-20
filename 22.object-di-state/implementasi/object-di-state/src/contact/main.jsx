import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { ContactForm } from "./ContactForm";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <ContactForm/>
        </Container>
    </StrictMode>
);