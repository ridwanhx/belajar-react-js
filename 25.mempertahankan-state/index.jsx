// # Mempertahankan State

// Kita sudah sama-sama tahu bahwa State itu terisolasi antar Component.
// React melacak State mana yang dimiliki oleh Component berdasarkan tempatnya di struktur UI
// Kita bisa mengatur, kapan kita ingin mempertahankan State, kapan kita akan mereset State
// State sendiri tidak disimpan di dalam Component. State itu disimpan di React, sedangkan ketika kita menggunakan State di Component, maka sebenarnya kita akan menggunakan State yang ada di React
// Cara React bisa tahu State mana yang digunakan oleh Component adalah, melihat posisi Component di struktur UI

// Posisi Component
// Seperti yang dijelaskan sebelumnya, React menyimpan State sesuai dengan posisi Component
// Ketika posisi Component berubah, misal hilang dari tampilan layar
// Secara otomatis State akan dihapus dari React
// Misal, kita akan membuat Component Counter bisa dihilangkan
// Ketika nanti Component tersebut dihilangkan dari tampilan, yang mana secara otomatis State nya juga akan hilang

// Component yang sama di Posisi yang sama
// Jika terdapat kasus kita menampilkan Component yang sama
// Tapi secara struktur UI dia berada di posisi yang sama
// Maka State akan dipertahankan oleh React, yang artinya tidak akan dihapus
// Hal ini mungkin akan membingungkan, tapi kita harus mengerti hal ini, karena React akan menyimpan informasi State mengikuti posisi dari Component nya, jika Component nya sama, dan posisinya sama, maka State akan dipertahankan

// Kenapa State Masih Sama?
// Hal ini terjadi karena secara struktur UI / tampilan DOM nya, posisi Component ada di posisi yang sama percis
// Jika posisi Component dan jenis Component nya sama, secara otomatis React akan mempertahankan State
// Kecuali posisinya berubah atau Component nya berbeda, maka React akan menghapus State nya