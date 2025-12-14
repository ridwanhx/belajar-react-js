import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
import { AlertButton } from "./button/AlertButton";
import { MyButton } from "./button/MyButton";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <AlertButton text={"Click Me"} message={"You already click me."} />

            {/* Implementasi Event handler sebagai props */}
            <MyButton text={"Smash me"} onSmash={() => alert("You already smash me")}/>
        </Container>
    </StrictMode>
);