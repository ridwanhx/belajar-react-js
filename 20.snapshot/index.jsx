// # Snapshot

// Variabel State sekilas mungkin terlihat seperti variabel JavaScript biasa
// Tapi sebenarnya, State itu mirip seperti snapshot (kondisi saat ini).
// Mengubah nilai variabel State tidak akan mengubah Snapshot, melainkan akan memicu render ulang untuk membuat Snapshot baru
// Kita mungkin berpikir bahwa tampilan web berubah secara langsung karena response dari event yang dilakukan oleh pengguna, seperti klik tombol
// Namun sebenarnya tidak seperti itu, kita sudah tahu di materi sebelumnya, ketika terjadi perubahan State, itu akan memicu render ulang, sehingga akan membuat Snapshot baru yang ditampilkan di layar

// Kesalahan mengubah State
// Paham tentang Snapshot ini, akan memberi gambaran cara pandang kita terhadap data di State
// Berikut adalah contoh kesalahan yang bisa dilakukan ketika mengubah State
// Kita berpikir jika mengubah State, saat itu juga data akan berubah, padahal mengubah State sebenarnya hanyalah mentrigger render ulang dengan nilai state yang baru

// Kenapa Counter tidak berubah 3x?
// Pada implementasi sebelumnya (studi kasus: UbahStateSalah), ada beberapa hal yang capat dijadikan catatan
// Kenapa pada saat kita debug di console, nilai Counter nya tidak berubah 3x ?
// Hal ini dikarenakan, setCounter() tidak akan mengubah data counter yang ada di Snapshot saat ini
// setCounter() hanya akan melakukan render ulang dengan data counter yang baru
// saat kita memanggil setCounter sebanyak 3x, bukan berarti React akan melakukan render ulang sebanyak 3x, React akan menunggu sampai Event Handler selesai, jika ada perubahan State, maka akan dilakukan render ulang
// Artinya render ulang hanya akan dilakukan sekali saja, walaupun kita mengubah State berulang-kali