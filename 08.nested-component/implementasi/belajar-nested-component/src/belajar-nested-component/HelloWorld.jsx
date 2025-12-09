function Paragraph() {
  return (
    <>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet?</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis
        earum reiciendis numquam quas, repellendus impedit.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </>
  );
}

function Images() {
  const location = "./src/assets/react.svg";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "200px",
      }}
    >
      <img src={location} alt="react logo" style={{ width: "50%" }} />
      <img src="vite.svg" alt="vite logo" style={{ width: "50%" }} />
    </div>
  );
}

function Quotes({ name = "Guest" }) {
  return (
    <>
      <blockquote>
        "A greate code creats when you shouldn't touch it after it works."
        <cite>- {name}</cite>
      </blockquote>
    </>
  );
}

function HelloWorld() {
  const props = {
    name: "Muhamad Ridwan",
  };
  return (
    <>
      <Images />
      <Paragraph />
      <Quotes name={props.name} />
    </>
  );
}

export { HelloWorld };