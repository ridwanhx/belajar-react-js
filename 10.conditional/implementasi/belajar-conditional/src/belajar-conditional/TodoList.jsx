import { Todo } from "./Todo";

function TodoList() {
  return (
    <>
      {/* Kedua komponen dihilangkan menggunakan return null */}
      <Todo text={"Belajar HTML"} isChecked={true} isDeleted={true} />
      <Todo text={"Belajar CSS"} isChecked={true} isDeleted={true} />

      <Todo text={"Belajar JavaScript"} isChecked={true} />
      <Todo text={"Belajar React"} isChecked={true} />
      <Todo text={"Belajar Laravel"} isChecked={true} />
      <Todo text={"Belajar Golang"} isChecked={false} />
    </>
  );
}

export { TodoList };
