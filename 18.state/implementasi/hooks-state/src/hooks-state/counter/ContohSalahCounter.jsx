import "../style.css"

function ContohSalahCounter() {
  // deklarasi counter
  let counter = 0;

  // diharapkan bahwa nantinya ketika tombolnya di klik, nilai counter bertambah dan ditampilkan ke console
  return (
    <>
      <button
        className="btn-counter" title="increment"
        onClick={() => {
          counter++;
            console.info(counter);
            
            document.getElementById("text-counter").innerText = counter;
        }}
      >
        +
      </button>
      <h3 id="text-counter">{counter}</h3>
    </>
  );
}

export { ContohSalahCounter };

// Catatan
// Meskipun kode program diatas berjalan sebagaimana mestinya (sesuai dengan yang kita inginkan, dimana nilai counter yang ditampilkan baik itu yang ada di console maupun ditampilkan di halaman web nya bertambah ketika kita klik tombol + nya, namun kembali lagi, bukan seperti ini cara React bekerja)
// Lagi lagi, cara diatas dikatakan salah karena kita tidak menggunakan React sebagaimana mestinya dan kembali menggunakan DOM manual
// kemudian, cara seperti ini juga tidak direkomendasikan karena kita berpotensi menyebabkan side effect ke depannya