import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TaskContext";

function Task({ task }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let component;

  function handleOnChange(e) {
    dispatch({
      ...task,
      type: 'UPDATE_TASK',
      text: e.target.value,
    });
  }

  function handleOnChangeDone(e) {
    dispatch({
      ...task,
      type: 'UPDATE_TASK',
      done: e.target.checked,
    });
  }

  function handleOnDelete() {
    dispatch({
      type: 'DELETE_TASK',
      id: task.id,
    });
  }

  if (isUpdate) {
    component = (
      <>
        <input
          type="text"
          className="form-control"
          onChange={handleOnChange}
          value={task.text}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsUpdate(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    component = (
      <>
        {task.text}
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsUpdate(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleOnChangeDone}
      />

      {component}

      <button className="btn" onClick={handleOnDelete}>
        Delete
      </button>
    </label>
  );
}

export { Task };
