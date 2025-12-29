import { useImmerReducer } from "use-immer";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

// inisiasi var id
let id = 0;

// inisiasi dummy
const initialTodos = [
  {
    id: id++,
    text: "Learn HTML",
    done: false,
  },
  {
    id: id++,
    text: "Learn CSS",
    done: false,
  },
  {
    id: id++,
    text: "Learn JavaScript",
    done: false,
  },
  {
    id: id++,
    text: "Learn PHP",
    done: false,
  },
];

function TodoApp() {
  // inisiasi state plural
  const [todos, dispatch] = useImmerReducer(todosReducer, initialTodos);

  // inisiasi handler untuk action bertipe add
  function handleAddTodo(text) {
    dispatch({
      type: "ADD_TODO",
      text: text,
    });
  }

  // inisiasi handler untuk action bertipe change
  function handleChangeTodo(todo) {
    dispatch({
      type: "CHANGE_TODO",
      // bisa begini
      // id: todo.id,
      // text: todo.text,
      // done: todo.done

      // paling efisien begini
      ...todo,
    });
  }

  // inisiasi handler untuk action bertipe delete
  function handleDeleteTodo(todo) {
    dispatch({
      type: "DELETE_TODO",
      id: todo.id,
    });
    }
    
    // inisiasi method todoReducer
    function todosReducer(draft, action) {
        // percabangan u/ masing-masing tipe aksi
        if (action.type === "ADD_TODO") {
            draft.push({
                id: id++,
                text: action.text,
                done: false,
            });
        } else if (action.type === "CHANGE_TODO") {
            // inisiasi index todo mana yang dilakukan perubahan
            const index = draft.findIndex((todo) => todo.id === action.id);

            draft[index].text = action.text;
            draft[index].done = action.done;
        } else if (action.type === "DELETE_TODO") {
            const index = draft.findIndex((todo) => todo.id === action.id);

            draft.splice(index, 1);
        }
    }

    // kembalikan komponent
    return (
        <>
            <h1>TodoList App</h1>

            <TodoForm onAddTodo={handleAddTodo} />
            
            <TodoList todos={todos} onChange={handleChangeTodo} onDelete={handleDeleteTodo}/>
        </>
    );
}

export { TodoApp };