function HeaderHelloWorld() {
  const helloWorld = "Hello, World!";
  return <h1>{helloWorld.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat datang, dan selamat belajar React JS.";
  return <p>{text.toLowerCase()}</p>;
}

export { HeaderHelloWorld, ParagraphHelloWorld };
