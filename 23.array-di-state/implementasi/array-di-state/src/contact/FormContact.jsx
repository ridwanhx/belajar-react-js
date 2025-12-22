import "../App.css";
import { Label } from "../utils/Label";
import { useImmer } from "use-immer";

function FormContact() {
  // inisiasi state dengan data berupa object
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  // inisiasi method untuk handle aksi
  function handleNameChange(e) {
      // setContact({...contact, name: e.target.value});
      
      setContact(draft => {
        draft.name = e.target.value
      })
  }

  function handleMessageChange(e) {
      // setContact({...contact, message: e.target.value});
      
      setContact(draft => {
          draft.message = e.target.value
      });
  }

  return (
    <>
      <form>
        <Label text={"Name"} labelFor={"name"} />
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={handleNameChange}
          value={contact.name}
        />
        <Label text={"Message"} labelFor={"message"} />
        <input
          type="text"
          id="message"
          className="form-control"
          onChange={handleMessageChange}
          value={contact.message}
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

export { FormContact };
