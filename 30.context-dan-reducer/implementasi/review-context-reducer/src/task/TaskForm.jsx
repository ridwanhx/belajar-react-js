import { useContext, useState } from "react";
import { Label } from "../utils/Label";
import { TasksDispatchContext } from "./TaskContext";

function TaskForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(TasksDispatchContext);

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleOnClick() {
      dispatch({
          type: 'CREATE_TASK',
          text: text,
      });
    setText("");
  }

  return (
    <>
      <Label labelFor={"create-task"} text={"Your Task"} />
      <input
        type="text"
        className="form-control"
        value={text}
        onChange={handleOnChange}
      />
      <button className="btn btn-outline-primary" onClick={handleOnClick}>
        + Add Task
      </button>
    </>
  );
}

export { TaskForm };
