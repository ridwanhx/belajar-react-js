// Implementasi Destructuring
// membuat props text, dengan nilai default berupa string
function HeaderHelloWorld({text = "Ups! Lupa kasih teks."}) {
  return (
    <>
      <h1 style={{ fontFamily: "arial, sans-serif", color: "#333" }}>
        {text.toUpperCase()}
      </h1>
    </>
  );
}

function ParagraphHelloWorld() {
  const location = "./src/assets/react.svg";
  return (
    <div style={{ fontFamily: "arial, sans-serif", color: "#535353" }}>
      <div style={{ display:"flex", width:"100px", justifyContent:"space-between", justifyItems:"center" }}>
        <img src={location} alt="react logo" />
        <img src="vite.svg" alt="vite logo" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        labore ipsam voluptates.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio facilis
        voluptatem dolores nesciunt labore distinctio neque pariatur totam esse
        quia qui sit eius quis, est, reiciendis eveniet soluta ipsam voluptatum.
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis.</p>
    </div>
  );
}

export { HeaderHelloWorld, ParagraphHelloWorld };
