import { useRef, useState } from "react";
import { GuestBookInput } from "./GuestBookInput";

function GuestBook() {
  // inisiasi states
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // inisiasi ref
  const nameInput = useRef(null);

  // inisiasi handler ketika submit diklik
  function handleSubmit(e) {
    // ignore aksi default (form)
    e.preventDefault();

    // reset kembali input
    setName("");
    setMessage("");

    // kita akan mencoba menarget input name ini agar ketika submit ditekan, alert muncul, dan fokus dinyalakan untuk input name nya ini
    nameInput.current.focus();

    // alert u/ menampilkan teks yang dikirimkan
    alert(`name: ${name}, message: ${message}`);
  }

  return (
    <form>
          <GuestBookInput name={name} setName={setName} ref={nameInput} />
      <label htmlFor="message">Message</label>
      <input
        type="text"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export { GuestBook };
