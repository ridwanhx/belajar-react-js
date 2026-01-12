import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Product } from "./Product";

function ProductList() {
  // inisiasi state, default sebagai array kosong
  const [products, setProducts] = useState([]);

  // inisiasi ref, default sebagai boolean false
  const loaded = useRef(false);

  // implementasi effect / useEffect
  useEffect(() => {
    // cek apakah sebelumnya pernah di load
    if (loaded.current === false) {
      // panggil json
      fetch("/products.json")
        // lakukan konversi terhadap data json menjadi response
        .then((response) => response.json())
        // lakukan set products
        .then((data) => setProducts(data))
        // lalu set loaded current nya menjadi true untuk menghentikan perulangan (agar terhindar dari infinity loop)
        .then(() => (loaded.current = true));
    }
    // dengan pengkondisian diatas, ketika render selesai, effect akan secara otomatis berjalan
    // selanjutnya effect tidak akan lagi dipanggil, karena di akhir pengkondisian diatas, kita sudah menginisiasikan nilai loaded current nya ke true
    // sehingga dengan begitu tidak memenuhi prasyarat pengkondisian diatas (loaded.current harus false jika effect ingin dijalankan)
  });

  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export { ProductList };
