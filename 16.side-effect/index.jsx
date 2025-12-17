// # Side Effect

// Apakah Component boleh memiliki Side Effect (efek samping)
// Tentu saja boleh, namun biasanya Side Effect terjadi dikarenakan adanya interaksi dari pengguna melalui Event Handler
// Misal, kita akan membuat Form Say Hello, dimana ketika Button di klik, kita ingin menampilkan Hello + nama pada Text

// DOM Manipulation
// Pada implementasi sebelumnya, kita menggunakan DOM Manipulation untuk mengubah Component di React
// Hal ini sebenarnya tidak terlalu direkomendasikan, oleh karena terasa percuma kita menggunakan React, jika kita masih mengimplementasikan DOM nya masih secara manual, dan terutama jika misal data yang memicu perubahan Element di Component bersumber dari berbagai Event Handler
// Oleh karena itu, hal yang direkomendasikan adalah menggunakan State, yang akan kita bahas di materi selanjutnya