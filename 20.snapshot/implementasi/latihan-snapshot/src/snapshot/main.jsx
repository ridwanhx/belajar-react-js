import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
import { UbahStateSalah } from "./counter/UbahStateSalah";
import { UbahStateBenar } from "./counter/UbahStateBenar";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <UbahStateSalah btnColor={"warning"}/>
            <UbahStateBenar btnColor={"primary"}/>
        </Container>
    </StrictMode>
);