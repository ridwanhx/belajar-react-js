// # Reducer

// Hooks State Reducer
// Sebelumnya kita sudah bahas banyak hal terkait Hooks State menggunakan useState()
// Selain itu, terdapat fitur Hooks State lain, yaitu Reducer, menggunakan useReducer()
// https://react.dev/reference/react/useReducer

// Reducer
// Pada kasus kita membuat Component yang memiliki banyak proses melakukan update ke satu State yang sama, kadang menyulitkan untuk maintain-nya, karena terlalu banyak Event Handler yang harus dibuat juga untuk mengubah data State-nya
// Pada kasus seperti ini, kita bisa mengkonsolidasi semua logic untuk update State di sebuah Function diluar Component, atau kita sebut Reducer
// Agar ada gambaran, kita akan coba membuat Component dengan State yang banyak di update tanpa menggunakan Reducer terlebih dahulu, nanti kita akan ubah menjadi menggunakan Reducer

// Menggunakan Reducer
// Sekarang kita akan fokus ke NoteApp.jsx
// Kita bisa lihat bahwa terdapat 3 aksi untuk melakukan update notes nya, ada add, update, dan delete. Dan itu semua disimpan dalam function yang berbeda-beda dan dari Event Handler yang berbeda beda
// Dengan menggunakan Reducer agak sedikit berbeda dengan mengubah State secara langsung, alih-alih memberi tahu ke React apa yang harus dilakukan dengan mengubah State, menggunakan Reducer kita memberi tahu React apa yang sudah dilakukan pengguna (action) / aksi apa yang akan dilakukan oleh pengguna
// Implementasi logic dari action nya nanti itu akan dilakukan ditempat yang terpisah / di reducer nya.

// Membuat Reducer Function
// Reducer Function adalah kode dimana kita menyimpan logis kita
// Reducer Function memiliki dua parameter, State saat ini, dan Action object
// Return function nya adalah State selanjutnya

// Menggunakan Immer
// Library Use-Immer juga mendukung Reducer, sehingga kita bisa lebih mudah karena kita bisa mengedit data draft dibanding membuat data baru dari State yang ada
// Kita bisa menggunakan method useImmerReducer