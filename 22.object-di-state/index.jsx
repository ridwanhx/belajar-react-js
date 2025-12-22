// # Object di State

// State bisa menyimpan jenis data JavaScript apapun, termasuk Object
// Tapi kita tidak disarankan untuk mengubah object yang terdapat di State
// Jika kita ingin mengubah object di State, kita disarankan membuat Object baru lalu mengubah data di State tersebut dengan Object baru

// Immutable Data
// Saat kita membuat data di State, kita harus memperlakukan data di State sebagai Immutable data (tidak bisa berubah)
// Artinya data di State hanya digunakan untuk dibaca (read only)
// Jika kita ingin mengubah data di State, maka kita harus ubah menggunakan data baru, yang artinya data lama tidak dimodifikasi
// Ini adalah praktek yang biasa dilakukan di React. Walaupun pada kenyataannya object di JavaScript tidak immutable
// Hal ini direkomendasikan agar kita tidak salah mengubah data langsung, padahal kita tahu bahwa mengubah data tidak akan memicu proses render ulang
// Untungnya di JavaScript kita bisa menggunakan Spread Syntax untuk membantu meng-copy attribute di Object

// Nested Object
// Kadang ada kasus kita menggunakan Nested Object
// Sama seperti sebelumnya, kita disarankan untuk selalu membuat object baru ketika mengubah State
// Kadang memang menyulitkan ketika Nested Object nya terlalu besar, oleh karena itu disarankan tidak terlalu dalam membuat Nested Object nya

// Immer Library
// Salah satu library yang sering digunakan ketika develop aplikasi menggunakan React adalah Immer
// Immer adalah Library yang digunakan untuk membuat immutable object dari Object yang sudah ada
// Menggunakan Immer akan lebih mudah dibandingkan menggunakan Spread Syntax, terutama untuk Object yang kompleks dan Nested
// https://github.com/immerjs/immer

// Cara kerja Immer Library
// Secara sederhana, Immer akan melakukan cloning terhadap object saat ini dan menjadikannya draft (Current)
// yang dimana untuk draft nya ini sendiri kita masih bisa ubah/manipulasi (tambah, ubah, dll) tanpa harus khawatir data asli nya akan berubah (karena status draft ini adalah sudah menjadi cloningan) (DRAFT)
// Dan setelah itu, hasil akhirnya akan menjadi hasil Object yang baru (NEXT)

// Visualisasi cara kerja Immer:
// CURRENT >> DRAFT >> NEXT
// Current : merepresentasikan object saat ini
// Draft : merepresentasikan cloningan object
// Next : merepresentasikan hasil object yang baru

// Use Immer Library
// Untungnya, React sudah menyediakan Library yang bernama Use Immer
// Biasanya ketika kita menggunakan hooks pada React, kita akan  mendefinisikan terlebih dahulu dengan keyword "use", nah termasuk juga untuk menggunakan library ini, kita juga menggunakan use-immer
// Library Immer juga bisa diintegrasikan dengan React State dengan mudah
// Kita bisa menggunakan library Use-immer
// https://github.com/immerjs/use-immer
// Kita cukup mengganti useState() menjadi useImmer()
// Dan untuk mengupdate Object di State, kita bisa menggunakan Function sebagai parameter di Update Method nya

// Menambah Library Immer
// npm install immer use-immer