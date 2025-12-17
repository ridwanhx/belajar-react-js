import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
// import { ContohSalahCounter } from "./counter/ContohSalahCounter";
import { ContohBenarCounter } from "./counter/ContohBenarCounter";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            {/* <ContohSalahCounter/> */}
            <ContohBenarCounter/>
            <ContohBenarCounter/>
        </Container>
    </StrictMode>
);