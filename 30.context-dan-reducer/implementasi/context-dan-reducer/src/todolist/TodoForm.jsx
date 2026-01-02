import "../App.css";
import { useState } from "react";
import { Label } from "../utils/Label";

// Implementasi Context
import { TodosDispatchContext } from "./TodoContext";
import { useContext } from "react";

// function TodoForm({ onAddTodo }) {

// setelah mengimplementasikan Context, kita tidak perlu mendefinisikan props lagi
function TodoForm() {
  // inisiasi state
  const [text, setText] = useState("");

  // menggunakan Context
  const dispatch = useContext(TodosDispatchContext);

  // inisiasi handler ketika terjadi perubahan pada input
  function handleOnChange(e) {
    setText(e.target.value);
  }

  // inisiasi handler ketika tombol ditekan
  function handleClick() {
    //   sebelum mengimplementasikan Context
    // onAddTodo(text); // kirim nilai text saat ini sebagai param onAddTodo
    // setText(""); // reset input

    //   implementasi context pada event handler nya secara langsung
    dispatch({
      type: "ADD_TODO",
      text: text,
    });

    setText(""); // reset state
  }

  // return component (form tambah data todo)
  return (
    <>
      <Label labelFor={"add-todo"} text={"Your Todo"} />
      <input
        type="text"
        className="form-control"
        id="add-todo"
        value={text}
        onChange={handleOnChange}
      />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        + Add Todo
      </button>
    </>
  );
}

export { TodoForm };
