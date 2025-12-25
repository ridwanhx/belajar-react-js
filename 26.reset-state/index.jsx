// # Reset State

// Sekarang kita sudah mengetahui bagaimana React mempertahankan data State
// Lantas bagaimana jika misal, pada kondisi tertentu, kita memang ingin melakukan Reset State, tidak mau mempertahankan State nya?
// Ada beberapa cara untuk me-reset State
// Yang pernah kita lakukan di materi sebelumnya adalah dengan cara menghapus Component dari tampilan UI / dari DOM Tree nya
// Ketika Component hilang dari tampilan UI, secara otomatis State akan ikut hilang

// Mengubah Dengan Component Lain
// Selain menghapus Component, kita juga bisa mengubah Component dengan Component lain di posisi yang sama
// Ketika posisi yang sama masih ada di struktur UI, tapi Component nya berbeda, secara otomatis State juga akan di reset
// Misal sebelumnya kita menampilkan Component Counter, lalu kita ubah menjadi element paragraf. Secara otomatis di Component Counter akan dihapus

// Mengubah Posisi Component
// Karena React akan menyimpan State sesuai dengan Component dan posisinya
// Artinya jika posisi Component diubah atau dipindahkan, secara otomatis State juga akan di reset

// Posisi Component Berbeda
// Selain mengubah posisi, kita juga bisa jika Component sama berada di posisi yang berbeda, secara otomatis State nya juga akan berbeda
// Ini mungkin akan membingungkan, karena secara DOM mungkin posisinya sama, tapi secara posisi di Component ini sebenarnya berbeda

// Menggunakan Key
// Cara yang umum biasanya digunakan untuk mereset State, yaitu menambahkan key pada Component
// Saat Component yang sama ditampilkan di posisi yang sama, jika key nya berbeda, maka akan dianggap Component yang berbeda, dengan demikian secara otomatis State akan di reset
// Ini mungkin cara yang paling direkomendasikan, dibanding harus mengubah-ubah posisi Component