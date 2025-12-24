// inisiasi method TaskList dengan parameter adalah merupakan props dengan nilai default yaitu array kosong
function TaskList({ items = [] }) {
  return (
    <>
      <h3>Task List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export { TaskList };
