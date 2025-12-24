// Akan berperan sebagai parent bagi TaskForm dan TaskList

import { useImmer } from "use-immer";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

// inisiasi method Task
// juga akan berperan sebagai parent bagi TaskForm dan TaskList
function Task() {
  // inisiasi items
  const [items, setItems] = useImmer([]);

  // cara sebelumnya
  // inisiasi handleOnSubmit
  // function handleOnSubmit(item) {
  //     setItems((draft) => {
  //         draft.push(item);
  //     });
  // }

  // atau, kita juga bisa mengirimkan setItems nya langsung

  return (
    <>
      {/* cara sebelumnya */}
      {/* <TaskForm onSubmit={handleOnSubmit} /> */}

      {/* cara alternatif */}
      <TaskForm setItems={setItems} />
      <TaskList items={items} />
    </>
  );
}

export { Task };
