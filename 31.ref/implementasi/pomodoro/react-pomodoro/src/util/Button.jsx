import "../App.css";

function Button({ btnColor, text = "Button", handleClick }) {
  return <button className={"btn btn-" + btnColor} onClick={handleClick}>{text}</button>;
}

export { Button };
