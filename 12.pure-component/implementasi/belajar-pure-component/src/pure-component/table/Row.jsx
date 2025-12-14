// let counter = 0;

// Implementasi Pure Component
// baris program yang dikomentari merupakan implementasi sebelumnya (sebelum mengimplementasikan Pure Component)
function Row({ id, text }) {  // tambahkan param id
  // {counter++};
  return (
    <tr>
      <td>{id}</td>
      <td>{text}</td>
    </tr>
  );
}

export { Row };
