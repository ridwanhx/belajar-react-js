import { Todo } from "./Todo";

function TodoList({ todos, onChange, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onChange} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export { TodoList };
