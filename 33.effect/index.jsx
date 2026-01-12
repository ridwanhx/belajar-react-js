// # Effect Hooks

// Hooks selanjutnya yang akan kita bahas adalah Effect Hooks
// Beberapa Component mungkin butuh untuk berkomunikasi dengan External System, misal berkomunikasi dengan Non-React Component, berkomunikasi dengan Server (contohnya via ajax / di luar dari React nya itu sendiri), dan lain lain
// Effect Hooks memungkinkan kita untuk membuat kode yang dijalankan setelah proses rendernya selesai, sehingga kita bisa berkomunikasi dengan system diluar React
// Effect terjadi setelah proses render selesai
// Kita bisa menggunakan useEffect() untuk membuat Effect
// https://react.dev/reference/react/useEffect

// Kenapa Tidak Cukup Event Handler?
// Biasanya kita tahu bahwa Component itu harus Pure, dan tidak memiliki efek samping
// Untuk kode yang memiliki efek samping / side effect, biasanya kita gunakan Event Handler
// Namun, terkadang ada kebutuhan kita memang perlu membuat Component yang memiliki efek samping ketika dirender
// Misal ketika Component di render, kita ingin mengambil data dari Server, sehingga bisa menyebabkan isi Component berubah (efek samping) sesuai dengan response Server
// Disinilah Effect Hooks diperlukan

// Infinite Loop
// Secara default, Effect akan dieksekusi setelah proses render
// Oleh karena itu, kita perlu berhati-hati, karena jika di dalam Effect kita mengubah State, maka bisa terjadi infinite loop yang menyebabkan proses render ulang terus-menerus terjadi tanpa henti
// Berkaca dari contoh studi kasus sebelumnya, baiknya jika di dalam Effect kita melakukan perubahan state, sebaiknya kita perlu menentukan "kondisi terminasi" yang akan menjadi stopper / penghenti loop nya
// Dalam kasus tadi, kita menginisiasi "kondisi terminasinya" adalah ketika load.current nya bernilai false, maka eksekusi effect. Dan Effect tidak akan di eksekusi jika load current nya bernilai sudah true.