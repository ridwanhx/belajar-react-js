import "../App.css";
import { useState } from "react";

// Implementasi Context
import { TodosDispatchContext } from "./TodoContext";
import { useContext } from "react";

// function Todo({ todo, onChange, onDelete }) {

// Setelah mengimplementasikan Context
function Todo({ todo }) {
  // insiasi state (boolean isEditing)
  const [isEditing, setIsEditing] = useState(false);

  // menggunakan Context
  const dispatch = useContext(TodosDispatchContext);

  // inisiasi handler ketika terjadi perubahan pada todo
  function handleChangeTodo(e) {
    // inisiasi nilai todo terbaru yang dikirimkan melalui input
    // const newTodo = { ...todo, text: e.target.value };

    // onChange(newTodo);

    // implementasi Context
    dispatch({
      ...todo,
      type: "CHANGE_TODO",
      text: e.target.value,
    });
  }

  // inisiasi handler ketika terjadi perubahan pada checkbox done nya
  function handleChangeDone(e) {
    // inisiasi status done terbaru
    // const newDone = { ...todo, done: e.target.checked };

    // onChange(newDone);

    // Implementasi Context
    dispatch({
      ...todo,
      type: "CHANGE_TODO",
      done: e.target.checked,
    });
  }

  // Implementasi Context
  function handleDeleteTodo() {
    dispatch({
      type: "DELETE_TODO",
      id: todo.id,
    });
  }

  // inisiasi wadah component
  let component;

  // inisiasi component mana yang akan ditampilkan berdasarkan kondisi isEditing saat ini
  if (isEditing) {
    component = (
      <>
        <input
          type="text"
          className="form-control"
          value={todo.text}
          onChange={handleChangeTodo}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    component = (
      <>
        {todo.text}
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  // return component
  return (
    <label>
      {/* checkbox */}
      <input type="checkbox" checked={todo.done} onChange={handleChangeDone} />

      {/* input component (add / edit) */}
      {component}

      {/* delete button */}
      <button className="btn" onClick={handleDeleteTodo}>
        Delete
      </button>
    </label>
  );
}

export { Todo };
