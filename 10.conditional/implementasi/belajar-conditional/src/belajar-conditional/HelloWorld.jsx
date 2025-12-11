import "./TodoList.css";

function Paragraph() {
  return (
    <>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque
        ullam recusandae quas ipsum nisi laudantium.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </>
  );
}

function Card() {
  const props = {
    title: "Default Title",
    author: "Muhamad Ridwan",
    article: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src="vite.svg" alt="vite logo" />
        </div>
        <h3 className="card-title">{props.title}</h3>
        <span>{props.author}</span>
        <article>{props.article}</article>
      </div>
    </>
  );
}

function HelloWorld() {
  return (
    <>
      <Paragraph />
      <Card />
    </>
  );
}

export { HelloWorld };
