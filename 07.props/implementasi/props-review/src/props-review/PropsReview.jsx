function HeaderHelloWorld({ text = "Ups, belum kirim teks!" }) {
  return (
    <>
      <h1>{text.toUpperCase()}</h1>
    </>
  );
}

function ImageHelloWorld({location = "Lokasi belum ditentukan."}) {
  return (
    <>
      <img src={location} alt="react logo" />
      <img src="vite.svg" alt="vite logo" />
    </>
  );
}

function ParagraphHelloWorld({ paragraph = "Ups, Belum ada Paragraf." }) {
  return (
    <>
      <p>{paragraph.toUpperCase()}</p>
    </>
  );
}

function HelloWorld() {
  const props = {
      text: "Hello, World! from Spread Syntax",
      location: "./src/assets/react.svg",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam ex esse."
  };
  return (
      <div>
          <HeaderHelloWorld {...props} />

          <ImageHelloWorld location={props.location} />
          
          <ParagraphHelloWorld paragraph={ props.paragraph } />
    </div>
  );
}

export { HelloWorld };
