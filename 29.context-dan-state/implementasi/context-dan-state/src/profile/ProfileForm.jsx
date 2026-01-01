import { useContext } from "react";
import "../App.css";
import { ProfileContext } from "./ProfileContext";

function ProfileForm() {
  // inisiasi props yang nantinya akan kita registrasikan kedalam Context
  const { name, setName, address, setAddress } = useContext(ProfileContext);

  // inisialisasi handler change
  //   function handleChangeName(e) {
  //     setName(e.target.value);
  //   }
  //   function handleChangeAddress(e) {
  //     setAddress(e.target.value);
  //   }
  // atau kalau mau dibuat lebih clean code, penulisannya bisa dilakukan sebagai callback saja seperti contoh dibawah

  return (
    <>
      <h3>Profile Form</h3>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <input
        type="text"
        className="form-control"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </>
  );
}

export { ProfileForm };
