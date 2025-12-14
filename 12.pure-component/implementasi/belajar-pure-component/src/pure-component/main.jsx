import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./Container";
import { Table } from "./table/Table";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            {/* saat dijalankan pertama kali, mungkin hasilnya akan diluar ekspektasi, karena iterasi count langsung dimulai dari 2, 4, 6, dst... */}
            {/* hal ini sebenarnya bisa terjadi karena kita menginisiasikan StrictMode pada saat me-render kode program kita */}
            {/* StrictMode akan menjalankan render tampilan sebanyak 2 kali */}
            {/* Nah, ini jugalah yang merupakan side effect dari implementasi bukan pure component */}
            <Table/>
        </Container>
    </StrictMode>
);