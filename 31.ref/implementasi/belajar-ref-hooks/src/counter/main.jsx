import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "../util/Container";
import { AlertButton } from "../util/AlertButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <AlertButton text={"+1"} message={"Counter ke: "} />
    </Container>
  </StrictMode>
);
