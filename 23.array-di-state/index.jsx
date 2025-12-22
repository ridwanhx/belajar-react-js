// # Array di State

// Sama seperti Object, Array di State juga harus kita perlakukan layaknya sebagai Immutable data
// Artinya operasi menambah data, mengubah, atau menghapus data di Array, kita harus buat Array baru untuk di update ke State
// Hal ini memang agak menyulitkan, oleh karena itu dengan bantuan library seperti Immer, hal ini jadi lebih mudah

// Mengubah Array (Tanpa Immer)
// Hindari Menambah menggunakan push, unshift | Gunakan concate, [...arr] spread syntax
// Hindari Menghapus menggunakan pop, shift, splice | Gunakan filter, slice
// Hindari Mengubah menggunakan splice, arr[i] = ... | Gunakan map
// Hindari Mengurutkan menggunakan reverse, sort | Gunakan / buat array baru