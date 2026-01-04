import "../App.css";
import { useContext, useState } from "react";
import { TodosDispatchContext } from "./TodoContext";

function Todo({ todo }) {
  // inisiasi state
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(TodosDispatchContext);
  // inisiasi var component
  let component;

  // inisiasi event handler
  function handleChangeTodo(e) {
      dispatch({
          ...todo,
          type: 'CHANGE_TODO',
          text: e.target.value,
      });
  }
  function handleChangeDone(e) {
      dispatch({
          ...todo,
          type: 'CHANGE_TODO',
          done: e.target.checked,
      });
  }
  function handleDeleteTodo() {
      dispatch({
          type: 'DELETE_TODO',
          id: todo.id,
      });
  }

  // apakah user sedang melakukan edit data?
  if (isEdit) {
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
          onClick={() => setIsEdit(false)}
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
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <label>
        {/* checkbox */}
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleChangeDone}
        />

        {/* component */}
        {component}

        {/* delete button */}
        <button className="btn" onClick={handleDeleteTodo}>
          Delete
        </button>
      </label>
    </>
  );
}

export { Todo };
