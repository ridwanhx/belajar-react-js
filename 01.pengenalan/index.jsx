// # Pengenalan

// Kenapa Butuh Framework / Library untuk Frontend?
// Mungkin menjadi pertanyaan, kenapa kita butuh framework untuk membuat web Frontend?
// Salah satu alasannya adalah agar ada standarisasi saat membuat project terutama ketika bekerja dalam tim
// Tanpa adanya Framework, maka setiap orang akan membuat kode dengan gaya masing-masing

// Sejarah ReactJS
// Awal mula bernama FaxJS, yang mulai dikembangkan di Facebook sekitar tahun 2010 unruk menangani masalah update halaman feed / timeline di Facebook tanpa harus refresh
// Tahun 2011, FaxJS diintegrasikan dengan XHP (pengembangan PHP di Facebook), yang akhirnya dinamai ReactJS
// Tahun 2013, Facebook merilis ReactJS ke umum sebagai OpenSource Tool pada saat JavaScript Conference
// Saat ini, ReactJS menjadi salah satu Frontend Framework yang paling populer, dan orang banyak memanggilnya dengan React, karena sekarang bukan hanya memakai JavaScript, namun juga TypeScript, React Native, dsb.
// https://github.com/facebook/react
// https://react.dev/

// Component
// Saat belajar React, kita harus terbiasa dengan istilah Component
// Saat belajar HTML, tentu kita familiar dengan yang namanya Element, atau kalau di dalam pembelajaran Document Object Model (DOM) di JavaScript sebelumnya ada istilah Node
// Nah, kalau di React sendiri, disebutnya Component.
// Component adalah kumpulan kode yang bisa digunakan secara independen
// Jadi nantinya, pada saat kita melakukan develop aplikasi frontend menggunakan react, nantinya kita biasanya akan develop / membuatnya dalam bentuk Component-component
// Component bisa berisikan satu atau lebih HTML Element, kode JavaScript dan CSS
// Tidak ada aturan harus seberapa kecil atau besar sebuah Component
// Anggap saja seperti membuat Function, kita bisa membuat function yang besar, atau kecil, karena tujuan Function itu sendiri adalah agar bisa digunakan secara berulang-ulang, begitu juga tujuan dari Component (Reusable)
// Struktur Component mirip seperti DOM (Document Object Model), dimana kita bisa membuat Component di dalam Component lain dalam project kita

// Struktur Component
/*
    App/
    ├── Header/
    │   └── Menu
    └── Content/
    │   └── ...
    └── Footer/
    │   └── Copyright
*/

// JSX
// React menggunakan JSX ketika membuat Component
// JSX (JavaScript XML atau JavaScript Syntax Extension), adalah kombinasi kode JavaScript dan XML (HTML), dimana kita bisa membuat Component dengan mudah menggunakan kode XML dan JavaScript dalam satu file
// JSX diperkenalkan oleh Facebook di React, namun saat ini JSX sudah banyak diadopsi oleh banyak Framework JavaScript lainnya