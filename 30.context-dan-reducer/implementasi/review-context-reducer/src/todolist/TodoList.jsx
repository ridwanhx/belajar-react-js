import { useContext } from "react";
import { Todo } from "./Todo";
import { TodosContext } from "./TodoContext";

function TodoList() {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export { TodoList };
