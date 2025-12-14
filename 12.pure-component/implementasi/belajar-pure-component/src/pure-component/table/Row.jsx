let counter = 0;

function Row({ text }) {
  {counter++};
  return (
    <tr>
      <td>{counter}</td>
      <td>{text}</td>
    </tr>
  );
}

export { Row };
