// # Event Handler

// Seperti yang sudah kita tahu, bahwa di HTML Element, kita bisa menambahkan Event Handler
// Sama juga dengan React Component, kita bisa menambahkan Event Handler pada Element-element di React Component
// Ada banyak sekali jenis Event Handler yang bisa kita tambahkan, kita bisa lihat di halaman Reference React Component
// https://react.dev/reference/react-dom/components/common

// Menambah Event Handler
// Untuk menambah Event Handler, biasanya kita akan tambahkan Function sebagai Handler nya
// Bisa dalam bentuk Anonymous Function, Arrow Function, atau membuat Function terlebih dahulu di dalam scope Component nya
// Nama Function untuk Handler biasanya diawali dengan nama "handle" dan diikuti dengna jenis Event Handler nya, misal handleClick(), handleMouseEnter(), dan lain-lain
// Sekarang, kita akan coba membuat Component untuk Alert Button

// Membaca Props di Event Handler
// Salah satu keuntungan membuat Function Event Handler di dalam Component adalah, kita bisa membaca Props yang digunakan oleh Component tersebut

// Event Handler sebagai Props
// Seperti yang di materi Props dbahas, Props sebenarnya adalah JavaScript Object
// Kita tahu bahwa JavaScript Object bisa memiliki attribute dengan tipe Function
// Oleh karena itu, kita juga bisa membuat Event Handler di Props
// Saat membuat attribute di Props yang berisikan Event Handler, biasanya nama attribute nya akan diawali dengan "on", misal "onSmash", "onHit", dan lain-lain.