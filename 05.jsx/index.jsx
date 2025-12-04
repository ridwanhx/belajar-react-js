// # JavaScript XML (JSX)

// Kenapa JSX
// Web dibuat menggunakan HTML, CSS, dan JavaScript
// Biasanya kita akan menyimpan konten di HTML, desain di CSS, dan logika aplikasi di JavaScript
// Dan biasanya kita akan simpan semua itu di file-file terpisah
// Tapi saat ini, Web sudah lebih interaktif, seringnya konten HTML ditampilkan berdasarkan logika aplikasi di JavaScript
// Oleh karena itu, React melakukan logika aplikasi dan membuat konten di satu tempat yang sama, yaitu JSX

// Mengubah HTML ke JSX
// Saat mengubah kode HTML ke JSX, kita tidak bisa lakukan semudah Copy Paste kodenya
// JSX memiliki aturan yang lebih ketat dibanding HTML, contohnya pada saat menggunakan tag element, wajib menggunakan tag penutup
// Misal, kita tidak bisa menggunakan:
// <img src=""> -> penulisan seperti ini tidak diperbolehkan
// Kita harus gunaakn tag penutup ketika menggunakan JSX:
// <img src=""/>
// Beberapa attribute di tag element pun berbeda, dan kita akan membahasnya secara bertahap

// Aturan JSX
// Component hanya boleh mengembalikan satu element (dibungkus didalam pembungkus div / fragment), jika kita ingin mengembalikan beberapa element, kita harus bungkus dalam parent element
// Wajib menutup semua tag element
// Attribute menggunakan camelCase. Attribute di element JSX akan dikonversi ke variabel JavaScript, oleh karena itu nama attribute harus mengikuti cara pembuatan nama variabel di JavaScript, yaitu tidak bisa menggunakan - (strip).
// Karena keterbatasan tersebut, kebanyakan attribute di element JSX akan menggunakan camelCase, contoh className (bukan class-name)

// JSX Converter
// Jika misal kita sudah mempunyai kode HTML, dan ingin mengkonversi ke JSX
// Disarankan menggunakan Converter sehingga kita tidak perlu lakukan secara manual lagi
// https://transform.tools/html-to-jsx

// JavaScript di JSX
// Kadang-kadang, kita dihadapkan pada kasus dimana kita ingin mengakses kode JavaScript di JSX
// Pada kasus ini, kita bisa menggunakan kurung kurawal untuk mengakses kode JavaScript di JSX