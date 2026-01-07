// # Ref Hooks

// Fitur Hooks yang lain selain State dan Context, adalah Ref Hooks
// Ketika kita ingin Component mengingat informasi, tapi tidak mau memicu render ulang, maka kita bisa menggunakan Ref
// Menggunakan Ref Hooks bisa menggunakan method useRef()
// https://react.dev/reference/react/useRef
// Salah satu perbedaan Ref dengan State adalah, Ref tidak memiliki set method nya (kalau di state biasanya kita inisiasi const [namaVariabel, setNamaVariabel], nah di Ref tidak demikian.)
// Lalu, kenapa pada Ref tidak terdapat set method nya?
// Karena untuk Ref sendiri cara kerja nya hampir mirip seperti State, hanya saja dia memang tidak akan mentrigger render ulang.
// Function useRef() akan mengembalikan Object yang memiliki attribute current, dimana attribute current berisi value yang dipegang oleh Ref

// Perbedaan Ref dan State
// useRef(initial) akan mengembalikan object {current: initial}
// useState(initial) mengembalikan [value, setValue]

// Ref tidak akan memicu render ulang ketika diubah
// State akan memicu render ulang ketika diubah

// Ref bersifat Mutable, bisa dimodifikasi dan diubah crrent value nya
// Stafe bersifat Immutable, kita hanya bisa mengubah function setValue

// Ref tidak direkomendasikan membaca / menulis current value ketika proses rendering. Lebih cocok dibaca atau diubah pada Event Handler
// State bisa dibaca kapanpun, tapi tiap rendernya akan memiliki Snapshot masing masing