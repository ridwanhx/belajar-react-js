// # Manipulasi DOM dengan Ref

// React secara otomatis akan mengupdate DOM ketika melakukan render ulang, jadi kita tidak perlu memanipulasi DOM secara manual lagi
// Tapi, kadang kita mungkin perlu mengakses DOM secara manual, contoh memindahkan fokus ke salah satu element, atau scroll ke element tertentu, dan lain-lain
// Sayangnya, tidak ada cara untuk melakukan hal ini menggunakan React, jadi kita perlu tangani hal ini secara manual
// Salah satu caranya kita menggunakan Ref menuju ke DOM element
// Caranya adalah, pada element nya, kita bisa tambahkan attribute ref

// Ref untuk Component
// Ref hanya bisa digunakan di DOM element, kita tidak bisa menggunakan ref di Component
// Jika kita menambahkan Ref ke Component, maka attribute current akan bernilai null
// Kita akan coba praktekan ini dengan membuat GuestBookInput Component

// Mengakses Component DOM Element
// Karena Component tidak bisa dijadikan sebagai Ref, oleh karena itu, jika kita ingin menggunakan Ref untuk Component, kita bisa menggunakan Props
// Kita bisa membuat Props ref yang kita isi Ref
// Props ref bisa kita gunaakn pada DOM element di dalam Component tersebut
// Sekarang kita coba tambahkan Ref kedalam Component GuestBookInput