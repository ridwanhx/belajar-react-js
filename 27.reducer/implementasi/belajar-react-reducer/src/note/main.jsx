import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { NoteApp } from "./NoteApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <NoteApp/>
        </Container>
    </StrictMode>
)