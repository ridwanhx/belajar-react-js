import "../App.css";
import { useState } from "react";
import { Label } from "../utils/Label";

// inisiasi method tambah data wishlist
function WishForm({ onAddWish }) {
  // inisiasi state
  const [text, setText] = useState("");

  // inisiasi method handleOnChange
  function handleOnChange(e) {
    setText(e.target.value);
  }

  // inisiasi method handleOnClick
  function handleOnClick() {
    onAddWish(text);
    setText("");
  }

  // return component
  return (
    <>
      <Label labelFor={"wishlist"} text={"Your Wishlist"} />
      <input
        type="text"
        className="form-control"
        onChange={handleOnChange}
        value={text}
      />
      <button className="btn btn-outline-primary" onClick={handleOnClick}>
        + Add Wishlist
      </button>
    </>
  );
}

export { WishForm };
