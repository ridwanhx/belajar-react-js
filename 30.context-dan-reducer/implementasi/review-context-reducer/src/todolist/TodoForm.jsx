import "../App.css";
import { useContext, useState } from "react";
import { Label } from "../utils/Label";
import { TodosDispatchContext } from "./TodoContext";

function TodoForm() {
  // inisiasi state
  const [text, setText] = useState("");
  
    const dispatch = useContext(TodosDispatchContext);

  // inisiasi handler
  function handleOnChange(e) {
    setText(e.target.value);
  }
  function handleOnClick() {
      dispatch({
          type: 'ADD_TODO',
          text: text,
      });
    setText("");
  }

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
      <button className="btn btn-outline-primary" onClick={handleOnClick}>
        + Add Todo
      </button>
    </>
  );
}

export { TodoForm };
