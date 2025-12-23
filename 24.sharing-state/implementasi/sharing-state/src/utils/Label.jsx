import "../App.css";

function Label({ labelFor, text }) {
  return <label htmlFor={labelFor} className="form-label">{text}</label>;
}

export { Label };