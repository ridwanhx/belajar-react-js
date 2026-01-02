import { useState } from "react";
import { ContactContext } from "./ContactContext";
import { ContactForm } from "./ContactForm";
import { ContactName } from "./ContactName";
import { ContactNumber } from "./ContactNumber";

function ContactApp() {
    const [name, setName] = useState("Guest");
    const [contact, setContact] = useState("No Number");

  return (
    <ContactContext.Provider value={{ name, setName, contact, setContact }}>
      <ContactForm />
      <ContactName />
      <ContactNumber />
    </ContactContext.Provider>
  );
}

export { ContactApp };