import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function ContactName() {
  const { name } = useContext(ContactContext);

  return (
    <>
      <h3>Contact Name</h3>
      <p>Hello, {name}</p>
    </>
  );
}

export { ContactName };
