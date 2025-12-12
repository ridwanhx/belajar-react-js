function Todo({ text, isCompleted = false, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else if (isCompleted) {
    return (
      <ul>
        <li>
          {text} {isCompleted && "✅"}
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>{text}</li>
      </ul>
    );
  }
}

export { Todo };
