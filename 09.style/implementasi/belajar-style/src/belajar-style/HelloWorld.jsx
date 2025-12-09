// Add Styling from CSS
import "./HelloWorld.css"

function Paragraph() {
  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        veritatis praesentium debitis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fugiat
        vero quibusdam ipsam at suscipit odit cumque, voluptates animi.
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </>
  );
}

function Image() {
  const location = "/src/assets/react.svg";

  return (
    <div className="d-flex justify-content-center align-items-center space-between">
      <img src={location} alt="react logo" className="w-25" />
      <img src="vite.svg" alt="vite logo" className="w-25" />
    </div>
  );
}

function Quote({ author = "Unknown" }) {
  return (
    <>
      <blockquote>
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio odio
        maxime explicabo."
        <cite>- {author}</cite>
      </blockquote>
    </>
  );
}

function HelloWorld() {
  const props = {
    author: "Muhamad Ridwan",
  };

  return (
    <>
      <Image />
      <Paragraph />
      <Quote author={props.author} />
    </>
  );
}

export { HelloWorld };