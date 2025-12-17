import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
import { FormSayHello } from "./form/FormSayHello";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <FormSayHello/>
        </Container>
    </StrictMode>
);