// # State Updates

// Seperti yang sebelumnya dibahas, melakukan update State berkali-kali, tidak akan mengubah data State di Snapshot saat itu, melainkan hanya akan memicu untuk render ulang dengan data di State yang baru
// Tapi, kadang-kadang, kita memang ada keperluan untuk mengubah data di State yang sama berulang kali
// Dan jika kita memang ingin mengubah data di State dengan data yang harapannya sudah diubah sebelumnya (walaupun belum di render ulang)
// Kita bisa menggunakan lambda sebagai parameter ketika memanggil function untuk update data State
// Sebagai catatan, variabel State nya sendiri sebenarnya data nya tidak berubah, namun seakan-akan data state nya di update tapi dengan data State yang terbaru