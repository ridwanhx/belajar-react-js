// # Props

// React Component menggunakan Props untuk berkomunikasi
// Parent Component (Component yang memanggil si components nya) bisa mengirim informasi ke Child Component dengan menggunakan Props
// Props itu mirip seperti attribute di HTML Element, tapi kita bisa mengirim nilai JavaScript seperti Object, Array, Function, ataupun yang lainnya

// Menambah Props
// Untuk menambahkan Properties / Props pada Component, kita hanya perlu menambahkan parameter object pada function di Component
// Parameter Props tersebut menggunakan JavaScript Object, sehingga dengan begitu kita bisa mengakses detail attribute yang dikirim dari parent melalui Props

// Destructing Props
// Salah satu yang biasa dilakukan oleh programmer React adalah, melakukan destructing parameter pada Props
// Hal ini untuk mempermudah ketika membaca, sehingga kita tahu attribute apa yang tersedia pada Component tersebut
// Karena Props adalah JavaScript Object, jadi kita juga bisa menambahkan fitur seperti Default Value pada Props

// Mengirim Props
// Untuk mengirim Props, kita bisa menggunakan atribut seperti layaknya HTML Element ketika menggunakan Component

// Spread Syntax
// Kadang-kadang, mengirim Props dari Parent Component ke Child Component sangat merepotkan
// Kalau terutama untuk kasus seperti dimana child nya memiliki banyak sekali attr untuk props nya
// Jika kita hanya ingin melakukan forward semua Props ke Child Component, kita bisa menggunakan Spread Syntax di JavaScript