import "../App.css";
import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function ContactForm() {
    const {name, setName, contact, setContact} = useContext(ContactContext);

  return (
    <>
      <h3>Contact Form</h3>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
    </>
  );
}

export { ContactForm };
