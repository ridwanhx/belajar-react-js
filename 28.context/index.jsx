// # Context Hooks

// Selain State Hooks yang sudah kita bahas sebelumnya menggunakan useState() dan useReduce()
// Masih ada Hooks yang lainnya, salah satunya adalah Context Hooks, menggunakan useContext()
// https://react.dev/reference/react/useContext

// Context
// Biasanya, untuk mengirim informasi dari parent Component ke child Component, kita bisa menggunakan Props
// Tapi mengirim informasi melalui banyak Component, mungkin akan membuat kita terlalu sulit melakukan maintain Props nya
// Atau, misal saja kita punya satu informasi yang digunakan oleh banyak Component, maka mengirim ke semua Component juga akan terlalu sulit
// Context membolehkan parent Component membuat informasi dan bisa digunakan oleh Component manapun di bawah nya, tidak peduli seberapa dalam Component di bawah nya
// Banyak juga yang bilang jika Context adalah Global State

// Membuat Context
// Untuk membuat Context, kita bisa menggunakan function createContext()
// https://react.dev/reference/react/createContext
// Selanjutnya, setelah membuat Context, untuk menggunakan Context tersebut, kita bisa menggunakan useContext()
// https://react.dev/reference/react/useContext
// Untuk mengubah data di Context, kita gunakan Provider yang terdapat di Context. Secara otomatis semua Component dibawahnya akan mendapat nilai sesuai yang kita ubah di Context Provider
// https://react.dev/reference/react/createContext#provider

// Tugas
// Misal kita akan membuat halaman profile, dimana kita ingin menampilkan nama pengguna di semua Component Child nya
// Buat halaman baru dengan file:
// profile.html
// src/profile/main.jsx
// src/profile/ProfileContext.jsx
// src/profile/ProfileApp.jsx
// src/profile/Profile.jsx
// src/profile/ProfileAddress.jsx
// registrasikan ke vite.config.js