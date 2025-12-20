// import { useState } from "react";
import { Label } from "../utils/Label";
import { useImmer } from "use-immer";

function ContactForm() {
  // inisiasi State
  // const [contact, setContact] = useState({
  //   name: "",
  //   message: "",
  // });

  // Inisiasi State menggunakan Use Immer
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  function handleNameChange(e) {
    // proses menimpa / cloning dengan object baru
    // setContact({ ...contact, name: e.target.value });

    // Implementasi cloning object menggunakan immer library
    setContact(draft => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    // proses menimpa / cloning dengan object baru
    // setContact({ ...contact, message: e.target.value });

    // Implementasi cloning object menggunakan immer library
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }

  return (
    <>
      <form>
        <Label labelFor={"name"} text={"Name"} />
        <input
          type="text"
          id="name"
          className="form-control"
          value={contact.name}
          onChange={handleNameChange}
          autoFocus
          autoComplete="off"
        />
        <Label labelFor={"message"} text={"Message"} />
        <input
          type="text"
          id="message"
          className="form-control"
          value={contact.message}
          onChange={handleMessageChange}
          autoComplete="off"
        />
      </form>

      <h3>Contact Detail</h3>
      <table cellPadding={10} cellSpacing={0}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>:</td>
            <td>{contact.message}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export { ContactForm };
