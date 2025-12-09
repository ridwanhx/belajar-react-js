import { createRoot } from "react-dom/client";
import { Container } from "./Container";
import { HelloWorld } from "./HelloWorld";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            {/* dalam kasus ini, Hello World adalah children dari Container */}
            <HelloWorld/>
        </Container>
    </StrictMode>
);