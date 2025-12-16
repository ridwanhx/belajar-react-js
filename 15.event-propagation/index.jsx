// # Event Propagation

// Event di React Component akan selalu disebarkan ke Component yang ada di atasnya (Event Propagation)
// Misal kita memiliki div dengan Event onClick, lalu didalamnya kita memiliki Button dengan Event onClick
// Ketika Button di Klik, maka onClick di Button akan dipicu dan selanjutnya onClick di div juga akan dipicu, jadi seakan akan ketika kita mengklik tombol / button nya, seolah-olah onClick pada si div nya juga ikut dipicu karena button tersebut ada di dalam lingkup div
// Kadang mungkin kita tidak ingin hal itu terjadi, maka kita bisa hentikan proses Event Propagation tersebut menggunakan method stopPropagation()
// https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

// Prevent Default
// Selain menghentikan Event Propagation, hal yang biasa kita lakukan ketika membuat Event Handler adalah menghentikan default action menggunakan preventDefault()
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// Misal kita membuat Form, ketika dipicu Event onClick, kita ingin hentikan default action Form Submit nya