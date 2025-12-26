// # Reducer

// Hooks State Reducer
// Sebelumnya kita sudah bahas banyak hal terkait Hooks State menggunakan useState()
// Selain itu, terdapat fitur Hooks State lain, yaitu Reducer, menggunakan useReducer()
// https://react.dev/reference/react/useReducer

// Reducer
// Pada kasus kita membuat Component yang memiliki banyak proses melakukan update ke satu State yang sama, kadang menyulitkan untuk maintain-nya, karena terlalu banyak Event Handler yang harus dibuat juga untuk mengubah data State-nya
// Pada kasus seperti ini, kita bisa mengkonsolidasi semua logic untuk update State di sebuah Function diluar Component, atau kita sebut Reducer
// Agar ada gambaran, kita akan coba membuat Component dengan State yang banyak di update tanpa menggunakan Reducer terlebih dahulu, nanti kita akan ubah menjadi menggunakan Reducer