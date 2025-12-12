import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TodoList } from "./TodoList";
import { Container } from "./Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <TodoList />
    </Container>
  </StrictMode>
);
