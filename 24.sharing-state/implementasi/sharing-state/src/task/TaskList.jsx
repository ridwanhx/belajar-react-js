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
