import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
import { Toolbar } from "./button/Toolbar";
import { Form } from "./form/Form";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Toolbar
        onTap={(e) => {
          // implementasi propagation
          // untuk kasus kali ini, propagation bertugas untuk memisahkan Event berdasarkan component mana yang saat ini di beri event
          // jika yang di klik adalah div, maka onTap hanya dijalankan satu kali saja dan hanya berlaku untuk satu kali eksekusi saja
          // sama hal nya ketika button yang di klik, maka onTap hanya dijalankan satu kali saja
          e.stopPropagation();

          // adapun jika kita tidak mengimplementasikan stopPropagation, yang terjadi adalah onTap akan dipanggil berulang ketika kita mengklik button, karena button merupakan child dari div
          // dalam kasus ini, jika kita tidak mengimplementasikan stopPropagation, maka alert akan muncul 2x ketika button di klik (1x untuk onTap pada button, 1x untuk onTap pada div)
          alert("You tap toolbar");
        }}
      />

      {/* Implementasi preventDefault */}
      <Form textLabel={"Username"} textButton={"Submit"}/>
    </Container>
  </StrictMode>
);
