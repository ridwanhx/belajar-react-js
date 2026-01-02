// # Context dan Reducer

// Sebelumnya kita sudah bahas tentang Reducer, sama seperti State, Reducer juga bisa kita integrasikan dengan Context
// Pada kasus ketika kita membuat Component yang sudah sangat kompleks, dan menggunakan Reducer, kita bisa mengirim semua State dan Reducer menggunakan Context ke child Component
// Sehingga lebih mudah dibanding menggunakan Props
// Misal kita coba modifikasi halaman Notes yang sebelumnya sudah kita buat

// Pindahkan Event Handler
// Karena method Dispatch ada di Context, jadi kita tidak perlu mengirim Event Handler lagi dari Parent Component ke Child Component melalui Props
// Kita bisa langsung pindahkan ke Child Component, karena Child Component bisa mengakses Dispatch Function secara langsung