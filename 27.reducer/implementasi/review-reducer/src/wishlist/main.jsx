import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../utils/Container";
import { WishApp } from "./WishApp";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <WishApp/>
        </Container>
    </StrictMode>
)