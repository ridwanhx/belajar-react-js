import { useContext } from "react";
import { Todo } from "./Todo";

// Implementasi Contex
import { TodosContext } from "./TodoContext";

// function TodoList({ todos, onChange, onDelete }) {

// Setelah mengimplementasikan Context
function TodoList() {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {/* <Todo todo={todo} onChange={onChange} onDelete={onDelete} /> */}

          {/* setelah mengimplementasikan Context */}
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export { TodoList };
