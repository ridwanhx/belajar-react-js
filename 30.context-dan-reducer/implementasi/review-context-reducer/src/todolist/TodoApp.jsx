import { useImmerReducer } from "use-immer";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodosContext, TodosDispatchContext } from "./TodoContext";

// inisialisasi dummy todo
let id = 0;
const initialTodo = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn PHP", done: false },
];

function TodoApp() {
  // inisiasi state
  const [todos, dispatch] = useImmerReducer(todosReducer, initialTodo);

  // inisiasi todosReducer
  function todosReducer(draft, action) {
    // lakukan pengecekan aksi mana yang saat ini sedang user lakukan
    if (action.type === "ADD_TODO") {
      draft.push({
        id: id++,
        text: action.text,
        done: false,
      });
    } else if (action.type === "CHANGE_TODO") {
      // inisiasi index todo
      const index = draft.findIndex((todo) => todo.id === action.id);

      draft[index].text = action.text;
      draft[index].done = action.done;
    } else if (action.type === "DELETE_TODO") {
      const index = draft.findIndex((todo) => todo.id === action.id);

      draft.splice(index, 1);
    }
  }

  return (
    <>
      <h1>Todolist App</h1>

      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <TodoForm />
          <TodoList />
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
}

export { TodoApp };
