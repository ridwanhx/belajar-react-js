import { useImmerReducer } from "use-immer";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodosContext, TodosDispatchContext } from "./TodoContext";

// inisiasi nilai default id
let id = 0;

// inisiasi initial todo (dummy)
const intialTodos = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn PHP", done: false },
];

function TodoApp() {
  // inisiasi todos state
  const [todos, dispatch] = useImmerReducer(todosReducer, intialTodos);

  // inisiasi handler untuk masing-masing tipe aksi
  // function handleAddTodo(text) {
  //     dispatch({
  //         type: 'ADD_TODO',
  //         text: text
  //     });
  // }
  // function handleChangeTodo(todo) {
  //     dispatch({
  //         type: 'CHANGE_TODO',
  //         id: todo.id,
  //         text: todo.text,
  //         done: todo.done,
  //         // bisa juga pakai spread operator
  //     });
  // }
  // function handleDeleteTodo(todo) {
  //     dispatch({
  //         type: 'DELETE_TODO',
  //         id: todo.id,
  //     });
  // }

  // inisiasi todosReducer
  function todosReducer(draft, action) {
    if (action.type === "ADD_TODO") {
      draft.push({
        id: id++,
        text: action.text,
        done: false,
      });
    } else if (action.type === "CHANGE_TODO") {
      // inisiasi index todos mana yang akan dilakukan perubahan
      const index = draft.findIndex((todo) => todo.id === action.id);

      // aksi
      draft[index].text = action.text;
      draft[index].done = action.done;
    } else if (action.type === "DELETE_TODO") {
      // inisiasi index mana pada todos yang akan dihapus
      const index = draft.findIndex((todo) => todo.id === action.id);

      // aksi
      draft.splice(index, 1);
    }
  }

  return (
    <>
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <h1>TodoList App</h1>
          {/* before implementasi Context */}
          {/* <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onChange={handleChangeTodo}
            onDelete={handleDeleteTodo}
          /> */}

          {/* after Implementasi Context */}
          <TodoForm />
          <TodoList />
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
}

export { TodoApp };
