// # Collection Component

// Kita pasti akan sering menampilkan Component yang sama berkali-kali sesuai koleksi data. JSX sendiri tidak memiliki fitur perulangan
// Untuk menampilkan multiple Component, sama seperti pada implementasi materi Conditional sebelumnya, kita akan memanfaatkan JavaScript
// Kita bisa menggunakan JavaScript Array untuk mengubah data Array menjadi Component, misal menggunakan method map() pada Array
// Misal sekarang kita akan coba ubah data TodoList yang sebelumnya kita buat menjadi array

// Component Key
// Jika kita perhatikan di Text Editor, mungkin kita akan melihat pesan peringatan:
// "Missing key prop for element in iterator"
// Saat membuat Collection Component, tiap Component diperlukan id (unique, string atau number) menggunakan attribute key
// Kenapa butuh Component Key? Hal ini agar React bisa mengenali Component ketika berubah, seperti posisinya diubah, dihapus atau ditambahkan pada Collection
// Biasanya, Component Key akan diambil dari data, sehingga lebih konsisten