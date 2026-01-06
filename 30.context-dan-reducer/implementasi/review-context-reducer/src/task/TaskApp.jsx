import { useImmerReducer } from "use-immer";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { TasksContext, TasksDispatchContext } from "./TaskContext";

let id = 0;
const initialTasks = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn PHP", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
];

function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function tasksReducer(draft, action) {
    if (action.type === "CREATE_TASK") {
      draft.push({
        id: id++,
        text: action.text,
        done: false,
      });
    } else if (action.type === "UPDATE_TASK") {
      const index = draft.findIndex((task) => task.id === action.id);
      draft[index].text = action.text;
      draft[index].done = action.done;
    } else if (action.type === "DELETE_TASK") {
      const index = draft.findIndex((task) => task.id === action.id);
      draft.splice(index, 1);
    }
  }

  return (
    <>
      <h3>Task App</h3>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <TaskForm />
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export { TaskApp };
