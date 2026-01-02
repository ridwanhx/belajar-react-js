import { createContext } from "react";

// inisiasi Context
const ContactContext = createContext({
  name: "",
  address: "",
});

export { ContactContext };
