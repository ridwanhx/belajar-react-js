import { Todo } from "./Todo";

function TodoList() {
  return (
    <>
      <Todo isCompleted={true} text={"Belajar HTML"} isDeleted={true} />
      <Todo isCompleted={true} text={"Belajar CSS"} />
      <Todo isCompleted={true} text={"Belajar JavaScript"} />
      <Todo isCompleted={true} text={"Belajar PHP"} />
      <Todo isCompleted={false} text={"Belajar Golang"} />
      <Todo isCompleted={false} text={"Belajar Dart"} />
    </>
  );
}

export { TodoList };
