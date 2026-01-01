// # Context dan State

// Untuk mengubah Context, kita harus menggunakan Provider
// Hal ini karena Context itu hanya bisa diakses oleh Component di bawahnya, tidak bisa Component diatasnya ataupun dengan yang sejajar
// Selain itu, Component di bawahnya hanya bisa membaca data dari Context, tidak bisa mengubah data di Context
// Oleh karena itu, jika kita ingin membuat data di Context bisa diubah dengan mudah, kita bisa memanfaatkan bantuan dari State

// Sebelum Menggunakan Context
// Context mungkin lebih mudah digunakan dibanding mengirim semua data State via Props
// Tapi jangan terlalu sering menggunakan Context sampai ke hal yang sederhana
// Gunakan Context jika memang perlu, jika masih sederhana, bisa gunakan State dan Props dulu, jika sudah terlalu kompleks dan terlalu dalam mengirim Props nya, baru diubah ke Context