// # Pure Component

// Dalam pemograman, kita mengenal yang namanya Pure Function
// https://en.wikipedia.org/wiki/Pure_function
// Sebuah Function kita sebut sebagai Pure Function jika memenuhi dua kriteria berikut :
// Function akan mengembalikan nilai yang sama untuk nilai parameter yang sama
// Function tidak memiliki efek samping / side effect, tidak ada perubahan pada variabel non local (variabel yang berada diluar function)

// contoh
// pure function
function double(num) {
    return num * 2;
}

// bukan pure function
let count = 0;  // nilai variabel non local ini akan berubah kalau function increment dibawah dijalankan
// contoh function dibawah tidak memenuhi 2 kriteria pure function, karena:
// 1. tanpa parameter dan nilai kembaliannya pun bukan berasal dari lingkup lokal si function nya
// 2. memiliki side effect terhadap variabel / environment lain di dalam kode program diluar dari lingkup / scope lokal function nya (dalam kasus ini memengaruhi nilai dari var count)
function increment() {
    count++;
    return count;
}

// Lalu, hubungannya dengan React?
// React mengasumsikan bahwa setiap komponen yang kita buat haruslah Pure Function.
// Ini berarti bahwa React Component yang kita buat harus selalu mengembalikan JSX yang sama dengan input yang sama.
// Walaupun sebenarnya kita bisa saja membuat React Component yang tidak Pure, tapi sangat tidak disarankan, karena setiap memanggil Component dengan input sama bisa menghasilkan nilai yang tidak konsisten
// Kita akan coba membuat contoh React Component yang tidak Pure

// Membuat Pure Component
// Lantas bagaimana cara Component Row dan Table menjadi Pure Component?
// Kita harus menghapus efek samping dari Component tersebut, contohnya kita bisa pindahkan variabel counter menjadi local variabel di Table, dan gunakan Props sebagai counter nya

// Dimana bisa melakukan efek samping?
// React menyediakan tempat khusus jika kita ingin membuat Component yang bisa menghasilkan efek samping
// Efek samping dari Component biasanay ditempatkan di Event Handler, Event Handler sendiri yaitu aksi yang terjadi ketika kita berinteraksi dengan Componentnya, contohnya ketika kita mengklik tombol, mengubah input, dan lain-lain
// Atau ketika misal Component tergantung dengan external system (misal API), maka React menyediakan function useEffect()
// https://react.dev/reference/react/useEffect
// Semua ini akan kita bahas di materima masing-masing