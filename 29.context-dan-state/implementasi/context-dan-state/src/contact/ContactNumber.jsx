import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function ContactNumber() {
  const { contact } = useContext(ContactContext);

  return (
    <>
      <h3>Contact Number</h3>
      <p>{contact}</p>
    </>
  );
}

export { ContactNumber };
