function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    // implementasi null component
    return null;
  } else {
    // Implementasi Ternary Operator
    return (
      <>
        <ul>
          {/* kondisi if else ternary operator */}
          <li>{isCompleted ? <del>{text}</del> : text}</li>
        </ul>
      </>
    );
  }
}

export { Todo };
