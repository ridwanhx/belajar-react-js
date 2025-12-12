import { Todo } from "./Todo";

function TodoList() {
  // inisiasi data array
  const data = [
    {
      id: 0, // implementasi Component Key
      text: "Belajar HTML",
      isCompleted: true,
      isDeleted: true,
    },
    {
      id: 1, // implementasi Component Key
      text: "Belajar CSS",
      isCompleted: true,
      isDeleted: true,
    },
    {
      id: 2, // implementasi Component Key
      text: "Belajar JavaScript",
      isCompleted: true,
    },
    {
      id: 3, // implementasi Component Key
      text: "Belajar PHP",
      isCompleted: true,
    },
    {
      id: 4, // implementasi Component Key
      text: "Belajar Laravel",
      isCompleted: true,
    },
    {
      id: 5, // implementasi Component Key
      text: "Belajar React",
      isCompleted: true,
    },
    {
      id: 6, // implementasi Component Key
      text: "Belajar Golang",
      isCompleted: false,
    },
    {
      id: 7, // implementasi Component Key
      text: "Belajar Flutter",
      isCompleted: false,
    },
  ];

  // lakukan perulangan data array diatas menggunakan function javascript map()
  //   const todos = data.map((todo) => {
  //     //   boleh menuliskan dengan menyebut masing-masing attr nya seperti ini
  //     //   <Todo text={todo.text} isCompleted={todo.isCompleted} />;

  //     //   namun jika attr terlampau banyak dan ingin membuatnya lebih clean code lagi, bisa dituliskan dengan menggunakan spread operator seperti ini
  //     return <Todo key={todo.id} {...todo} />;
  //   });

  // kembalikan components
  //   return <ul>{todos}</ul>;

  // atau kita bisa lebih ringkas lagi code nya agar menjadi seperti berikut :
  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export { TodoList };
