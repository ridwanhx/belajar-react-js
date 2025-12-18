// # Render

// Sebelum Component yang kita buat ditampilkan di layar / halaman web browser, Component harus di render oleh React terlebih dahulu
// Oleh karena itu, kita perlu tahu bagaimana cara kerja proses React ini ketika menampilkan Component yang kita buat
// Terdapat 3 tahapan proses menampilkan Component di React
// Pertama, trigger (memicu) proses render
// Kedua, melakukan proses render Component
// Ketiga, menempatkan hasil render Component ke DOM (Document Object Model)

// Proses Render di React
// TRIGGER RENDER -> RENDER COMPONENT -> COMMIT TO DOM

// Trigger Render
// Pemicu render biasanya terjadi karena dua hal
// Pertama adalah inisialisasi awal Component, yang kita lakukan menggunakan method render()
// Kedua adalah ketika ada pemicu perubahan State
// Setiap terjadi perubahan pada State, secara otomatis React akan mengirimkan antrian untuk memicu proses render ulang

// Render Component
// Setelah proses Trigger Render terjadi, React akan memanggil Component yang kita buat untuk mencari tahu apa yang harus ditampilkan di layar
// Rendering adalah proses React memanggil Component yang kita buat
// Pada proses inisialisasi awal, React akan memanggil Root Component (paling atas)
// Pada saat proses render ulang, React hanya akan memanggil ulang Component yang state nya berubah
// Setelah proses render selesai, React akan melakukan proses Commit

// Commit Changes
// Setelah proses render selesai, React akan melakukan proses commit changes (menyimpan perubahan) ke DOM
// Untuk inisialisasi awal, karena baru pertama kali, artinya element di DOM belum ada, maka React akan menggunakan appendChild() untuk menambahkan element ke DOM
// Sedangkan untuk proses render ulang, React akan mencoba melakukan perubahan seminimal mungkin untuk menyamakan DOM saat ini dengan hasil rendering
// React hanya akan mengubah element di DOM, jika memang element tersebut berbeda dari hasil rendering