function HeaderHelloWorld() {
  const text = "Hello, World!";
  // implementasi JSX
  // menggunakan method .toUpperCase yang merupakan method yang dimiliki oleh JavaScript, kemudian kita akses menggunakan penulisan JSX
  return <h1>{text.toUpperCase()}</h1>;
}

function PharagraphHelloWorld() {
  const text = "Selamat Belajar React JS.";
  const address = {
    city: "Bandung",
    province: "West Java",
    country: "Indonesia",
  };
  // pada react sendiri, aturan location secara default di set langsung ke folder public/
  const viteLogo = "vite.svg";

  // sehingga, sebelumnya kita sempat mencoba mengakses ke direktori src\assets\react.svg langsung dan tidak berhasil.
  // maka dari itu, jika pada kasus ini logo react ada di direktori tersebut, kita perlu mulai mengarahkannya lagi dari folder src/../..
  const reactLogo = "./src/assets/react.svg";
  return (
    <>
      <p>{text.toLowerCase()}</p>

      <div
        style={{
          width: "150px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <img src={reactLogo} alt="react logo" />
        <img src={viteLogo} alt="react logo" />
      </div>

      {/* Implementasi kurung kurawal double pada JSX */}
      {/* Menambahkan styling pada element */}
      <ul>
        <li style={{ color: "blue" }}>{address.city}</li>
        <li style={{ listStyle: "none" }}>{address.province}</li>
        <li style={{ fontStyle: "italic", fontWeight: "bold", color: "red" }}>
          {address.country}
        </li>
      </ul>
    </>
  );
}

export { HeaderHelloWorld, PharagraphHelloWorld };
