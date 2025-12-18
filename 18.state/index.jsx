// # State

// Component kadang perlu untuk berubah dikarenakan interaksi yang dilakukan oleh penggunanya
// Misal, input di klik bisa menaikkan data counter. Tombol next bisa mengubah gambar banner yang sedang muncul, dan lain-lain
// Component harus bisa mengingat nilai saat ini, seperti counter saat ini, gambar saat ini, dan lain-lain
// Di React, memori spesifik di Component disebut State

// State menggunakan Local Variable biasa
// Apakah local variable biasa di Component bisa digunakan untuk State? Sayangnya hal ini tidak bisa dilakukan
// Ketika React melakukan render Component untuk yang kedua kali dan seterusnya, maka semua kode Component akan dieksekusi ulang, oleh karena itu local variable akan kembali ke nilai awal
// Perubahan di local variable juga, tidak akan memicu render ulang Component

// useState
// Untuk membuat State, kita bisa menggunakan function useState(initial)
// https://react.dev/reference/react/useState
// Function useState akan mengembalikan array dengan dua nilai, pertama adalah State-nya, dan kedua adalah function untuk mengubah value di State tersebut
// Component yang menggunakan State tersebut, secara otomatis akan di render

// State Terisolasi dan Private
// State merupakan data yang terisolasi dan private secara lokal terhadap Component yang menggunakannya
// misal jika pada contoh kasus sebelumnya, kita menginisiasikan state nya misal sebagai [counter, dan setCounter], kemudian pada Component lainnya kita menginisiasikan nama yang sama, maka itu tidak akan jadi masalah
// Artinya, jika kita me-render Component yang sama berulang kali, maka State dari tiap Component tersebut akan terpisah satu sama lain (tidak akan saling berhubungan)