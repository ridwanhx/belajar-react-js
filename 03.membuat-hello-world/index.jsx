// # Membuat Hello World

// Seperti biasa, hal yang biasa kita lakukan / buat ketika belajar adalah membuat aplikasi Hello World
// Sekarang kita akan buat halaman Hello World menggunakan React

// Membuat Component
// Biasanya, Component akan dibuat dalam satu file JSX dengan nama yang sesuai dengan nama komponen nya
// Misal kita akan membuat Component bernama HelloWorld (camel case)
// Maka kita bisa membuat file HelloWorld.jsx
// Selanjutnya, kita perlu membuat default function dengan nama Component nya, yaitu HelloWorld
// Return dari function tersebut adalah element UI yang akan ditampilkan

// contoh implementasi
/*
File HelloWorld.jsx :

    function HelloWorld() {
        return (
            // ini merupakan element daripada component nya
            <div>
                <h1>...</h1>
                <p>...</p>
            </div>
        );
    }
    
    export default HelloWorld
*/

// JSX hanya bisa mengembalikan / return satu elemen saja
// seperti hal nya pada contoh diatas, bisa kita lihat, bahwa element seperti h1 dan p dibungkus oleh div
// dengan begitu elemen yang dikembalikan adalah merupakan satu kesatuan di dalam div / di dalam bungkus yang sama

// selain menggunakan pembungkus <div>, kita juga bisa menuliskannya menggunakan pembungkus fragment
// contoh implementasi fragment
/*
File HelloWorld.jsx :

    function HelloWorld() {
        return (
            // ini merupakan element daripada component nya
            <>
                <h1>...</h1>
                <p>...</p>
            </>
        );
    }
    
    export default HelloWorld
*/

// Menampilkan Component
// Untuk menampilkan Component, diperlukan instance dari React Root
// Kita bisa membuat React Root menggunakan method createRoot(element)
// element yang dimaksud pada konteks element diatas adalah element dimana nantinya kita mau menampilkan komponen nya
// https://react.dev/reference/react-dom/client/createRoot
// Selanjutnya untuk menampilkan Component di React Root, kita bisa gunakan method render(component)
// Untuk membantu mencari masalah saat development, React menyediakan component StrictMode, kita bisa menggunakan StrictMode untuk menampilkan komponen di Root
// https://react.dev/reference/react/StrictMode